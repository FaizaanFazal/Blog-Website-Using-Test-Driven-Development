import dotenv from "dotenv"
import fs from "fs"
import { PrismaClient } from '@prisma/client';
import { generateAccestoken } from '../models/authModel.js';
import jwt from "jsonwebtoken"
import {  Request, Response,NextFunction } from "express";

const prisma = new PrismaClient();
dotenv.config()
let refreshTokens: any[] = [] //store in db or on server not here in list

export const register = async (req: Request, res: Response, next: NextFunction) => {

}

export const login = async (req: Request, res: Response, next: NextFunction) => {

}

export const logout = async (req: Request, res: Response, next: NextFunction) => {

}

export const getToken = (req: Request, res: Response, next: NextFunction) => {

}