import { NextFunction, Request, Response } from "express";

export const ensureIsAdvertiserUserMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const userAccount = req.user.account

    if(userAccount === 'buyer') {
        return res.status(403).json({ message: "Unauthorized" })
    }
    next()
}