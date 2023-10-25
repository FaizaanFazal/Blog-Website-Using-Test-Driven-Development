import dotenv from "dotenv"
import { PrismaClient } from '@prisma/client';
import { generateAccestoken } from '../models/authModel.js';
import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";


const prisma = new PrismaClient();
dotenv.config()

export const addblog = async (req: Request, res: Response, next: NextFunction) => {
    const newblog = await prisma.blogs.create({ data: req.body });
    res.json(newblog);
}


export const getblogbyid = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.slug;
    const blog = await prisma.blogs.findMany({
        where: { slug:id },
        include: {
            likes: true,
            tags:true
        }
    });
    res.json(blog);
}

export const getallblogs = async (req: Request, res: Response, next: NextFunction) => {
    const allBlogs = await prisma.blogs.findMany({
        include: {
            likes: true,
            tags:true
        }
    });
    res.json(allBlogs);
}

export const getFeatured = async (req: Request, res: Response, next: NextFunction) => {
    const featured = await prisma.blogs.findMany({
        where: { featured:true },
        include: {
            likes: true,
            tags:true
        }
    });
    res.json(featured);
}