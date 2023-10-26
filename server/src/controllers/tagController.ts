import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction, response } from "express";

const prisma = new PrismaClient();


export const addTagsToBlog = async (req: Request, res: Response, next: NextFunction) => {
    const { tagId, blogId } = req.body
    if (tagId && blogId) {
        const checkInBlog = await prisma.blog_Tags.findFirst({
            where: {
              tagId:  tagId as string
            }
        })
        if(checkInBlog){
            res.status(200);
            res.send({message:"Already Exist"});
        }
        else{
            const newblog = await prisma.blog_Tags.createMany({ data: req.body });
            res.json(newblog);
        }
      
    }
    else {
        res.status(400);
        res.send({message:"Bad Request"});
    }


}

export const createNewTag = async (req: Request, res: Response, next: NextFunction) => {
    const newTag = await prisma.tags.create({ data: req.body });
    res.json(newTag);
}


export const getAlltags = async (req: Request, res: Response, next: NextFunction) => {
    const newblog = await prisma.tags.findMany();
    res.json(newblog);
}

export const removeTagsToBlog = async (req: Request, res: Response, next: NextFunction) => {
    const deleteblogtags = await prisma.blog_Tags.deleteMany({})
    res.json(deleteblogtags);
}
