import { Router } from "express";
import { createUserController } from "../controllers/user/user.controller";

import { validateSchema } from "../middlewares/validateSchema.middleware";

import { createUserValidator } from '../schemas/user/usersSchemas'

export const userRouter = Router();

userRouter.post('', validateSchema(createUserValidator), createUserController)