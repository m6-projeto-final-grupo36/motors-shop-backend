import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";
import {instanceToPlain} from 'class-transformer'
import { listRetrieveUserService } from "../../services/user/listRetrieveUser.service";

export const createUserController = async(req: Request, res: Response) => {
    const userData = req.validatedBody
    const user = await createUserService(userData)
    return res.status(201).json(instanceToPlain(user))
} 

export const listRetrieveUserController = async(req: Request, res: Response) => {
    const idParam = req.params.id
    const user = await listRetrieveUserService(idParam)
    return res.json(instanceToPlain(user))
}