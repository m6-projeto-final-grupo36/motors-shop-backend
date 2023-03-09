import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  forgotPasswordController,
  listRetrieveUserController,
  listUsersController,
  resetPasswordController,
  updateAddressController,
  updateUserController,
} from "../controllers/user/user.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsAccountOwner } from "../middlewares/ensureIsAccountOwner.middleware";

import { validateSchema } from "../middlewares/validateSchema.middleware";

import {
  createUserValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
  updateUserValidator,
  addressUpdateSchema,
} from "../schemas/user/usersSchemas";

export const userRouter = Router();

userRouter.post("", validateSchema(createUserValidator), createUserController);
userRouter.post(
  "/forgot_password",
  validateSchema(forgotPasswordValidator),
  forgotPasswordController
);
userRouter.patch(
  "/reset_password/:id",
  validateSchema(resetPasswordValidator),
  resetPasswordController
);

userRouter.get("/:id", listRetrieveUserController);
userRouter.get("", listUsersController);
userRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAccountOwner,
  deleteUserController
);
userRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAccountOwner,
  validateSchema(updateUserValidator),
  updateUserController
);
userRouter.patch(
  "/address/:id", // id do usuário
  ensureAuthMiddleware,
  ensureIsAccountOwner,
  validateSchema(addressUpdateSchema),
  updateAddressController
);
