import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();


export const addTagsToBlog = async (req: Request, res: Response, next: NextFunction) => {
    const newblog = await prisma.blog_Tags.createMany({ data: req.body });
    res.json(newblog);
}

export const createNewTag = async (req: Request, res: Response, next: NextFunction) => {
    const newTag = await prisma.tags.create({ data: req.body });
    res.json(newTag);
}


export const getAlltags = async (req: Request, res: Response, next: NextFunction) => {
    const newblog = await prisma.tags.findMany();
    res.json(newblog);
}
