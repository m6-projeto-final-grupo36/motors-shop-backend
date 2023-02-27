import { instanceToPlain } from 'class-transformer'
import {Request, Response} from 'express'
import { loginSessionService } from '../../services/session/loginSession.service'

export const loginSessionController = async(req: Request, res: Response) => {
    const loginData = req.validatedBody
    const data = await loginSessionService(loginData)
    return res.json(instanceToPlain(data))
}