import { NextFunction, Request, Response } from "express";

export const ensureIsAccountOwner = async(req: Request, res: Response, next: NextFunction) => {
    const userId = req.user.id
    const idParam = req.params.id

    if(userId !== idParam) {
        return res.status(401).json({ message: "You do not have permission to delete this user." })
    }
    next()
}