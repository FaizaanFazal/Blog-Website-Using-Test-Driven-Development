import dotenv from "dotenv"
import { PrismaClient } from '@prisma/client';
import { generateAccestoken } from '../models/authModel.js';
import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";
import * as dayjs from 'dayjs'


const prisma = new PrismaClient();
dotenv.config()
let refreshTokens: any[] = [] //store in db or on server not here in list

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const newAcc = await prisma.users.create({ data: req.body });
    res.json(newAcc);
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const findacc = await prisma.users.findUnique({
        where: {
            email: req.body.email,
        },
    })
    if (!findacc) { throw new Error("User not found") } //error to create
    else {
        if (findacc.password === req.body.password) {
            const users = { email: req.body.email, username: findacc.userName }
            const accessToken = generateAccestoken(users)
            let refreshToken: string;
            if (process.env.REFRESH_TOKEN_SECRET) {
                refreshToken = jwt.sign(users, process.env.REFRESH_TOKEN_SECRET)
            }
            else { throw new Error("Refresh token issue") }
            //stroing accestoken with 1h expiry in cookies
            res.cookie('accesstoken', accessToken, {
                secure: false,
                httpOnly: true
            });
            res.cookie('refreshtoken', refreshToken, {
                secure: false,
                httpOnly: true
            })
            refreshTokens.push(refreshToken)
            res.json(`Welcome Back! ${findacc.userName}`)
        }
        else {
            throw new Error("Wrong Password")
        }
    }
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie("accesstoken");
    res.json("Logged out");
    res.end();
}

export const getToken = (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refreshtoken
    console.log("refreshtoke",refreshToken);
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccestoken({ email:req.body.email,username: req.body.userName })
        res.json({ accessToken: accessToken })
    })
}