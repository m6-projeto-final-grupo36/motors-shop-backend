import { Router } from "express";
import { createUserController, listRetrieveUserController } from "../controllers/user/user.controller";

import { validateSchema } from "../middlewares/validateSchema.middleware";

import { createUserValidator } from '../schemas/user/usersSchemas'

export const userRouter = Router();

userRouter.post('', validateSchema(createUserValidator), createUserController)
userRouter.get('/:id', listRetrieveUserController)