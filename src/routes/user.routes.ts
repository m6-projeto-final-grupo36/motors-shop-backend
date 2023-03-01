import { Router } from "express";
import { createUserController, deleteUserController, listRetrieveUserController, listUsersController } from "../controllers/user/user.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsAccountOwner } from "../middlewares/ensureIsAccountOwner.middleware";

import { validateSchema } from "../middlewares/validateSchema.middleware";

import { createUserValidator } from '../schemas/user/usersSchemas'

export const userRouter = Router();

userRouter.post('', validateSchema(createUserValidator), createUserController)
userRouter.get('/:id', listRetrieveUserController)
userRouter.get('', listUsersController)
userRouter.delete('/:id', ensureAuthMiddleware, ensureIsAccountOwner, deleteUserController)