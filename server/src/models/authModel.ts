import { Request, Response, NextFunction } from "express-serve-static-core";
import jwt from "jsonwebtoken"

export const generateAccestoken = (user: { email: string, username: string }) => {
    if (process.env.ACCESS_TOKEN_SECRET) {
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    }
    else {
        throw new Error("Access token issue")
    }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accesstoken;
    if(!token){return 401}
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (error: any, user: any) => {
            if (error) {
                resolve(403);
            } else {
                resolve(user);
            }
        });
    })

}