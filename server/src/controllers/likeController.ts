import dotenv from "dotenv"
import { PrismaClient } from '@prisma/client';
import jwt, { JwtPayload } from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";


const prisma = new PrismaClient();
dotenv.config()

export const likeBlog = async (req: Request, res: Response, next: NextFunction) => {
    const user_Id = await prisma.likes.findMany({
        where: { userId: req.body.userId,
            blogId:req.body.blogId 
        },
    });
    console.log(user_Id)
    if (user_Id.length>0) {
        const newlike = await prisma.likes.deleteMany({ 
            where: {
                userId: req.body.userId,
                blogId:req.body.blogId
            },
        });
        res.json({status:false});
    }
    else {
        await prisma.likes.create({ data: req.body });
        const accessToken = req.cookies.accesstoken
        const decodedToken = decode(accessToken) as JwtPayload;
        res.json({status:true,userId:decodedToken.id});
    }
}
