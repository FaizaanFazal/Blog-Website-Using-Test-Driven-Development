import { authenticateToken } from "@/models/authModel";
import { Request, Response, NextFunction, RequestHandler } from "express";


export const protectedRoutes = [
    {
        method: "",
        path: ""
    },
    {
        method: "",
        path: ""
    }];


//check protected routes to check authentication
export const isProtectedRouteMiddleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method)
    const protectedPathData = protectedRoutes.find((route) => route.path === req.path);
    if (protectedPathData) {
        const authenticatedUser = authenticateToken(req, res, next);
        if (authenticatedUser !== 403 && authenticatedUser !== 401) {
            req.user = authenticatedUser;
            console.log("User", authenticatedUser)
        } else {
            res.status(authenticatedUser);
            res.end();
        }
    } else {
        next();
    }
};