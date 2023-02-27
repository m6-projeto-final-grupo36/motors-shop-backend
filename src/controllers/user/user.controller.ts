import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";
import {instanceToPlain} from 'class-transformer'

export const createUserController = async(req: Request, res: Response) => {
    const userData = req.validatedBody
    const user = await createUserService(userData)
    return res.status(201).json(instanceToPlain(user))
} 