import {Router} from 'express'
import { loginSessionController } from '../controllers/session/session.controller'
import { validateSchema } from '../middlewares/validateSchema.middleware'
import { loginSessionValidator } from '../schemas/session/sessionsSchemas'

export const sessionRouter = Router()

sessionRouter.post('', validateSchema(loginSessionValidator), loginSessionController)