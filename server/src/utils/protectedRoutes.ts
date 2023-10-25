import { authenticateToken } from "@/models/authModel";
import { Request, Response, NextFunction, RequestHandler } from "express";


export const protectedRoutes = [
    {
        method: "post",
        path: "/add"
    },
    {
        method: "",
        path: ""
    }];


//check protected routes to check authentication
export const isProtectedRouteMiddleware: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method)
    const protectedPathData = protectedRoutes.find((route) => route.path === req.path);
    if (protectedPathData) {
        const authenticatedUser = authenticateToken(req, res, next);
        if (await authenticatedUser !== 403 && await authenticatedUser !== 401) {
            req.user = authenticatedUser;
            console.log("User", authenticatedUser)
        } else {
            res.status(authenticatedUser as any);
            res.end();
        }
    }  
     next();

};