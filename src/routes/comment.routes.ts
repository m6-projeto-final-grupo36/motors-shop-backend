import { Router } from "express";
import { createCommentController, deleteCommentController } from "../controllers/comment/comment.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { createCommentValidator } from "../schemas/comment/commentsSchemas";

export const commentRouter = Router();

commentRouter.post(
  "/:announcementId",
  ensureAuthMiddleware,
  validateSchema(createCommentValidator),
  createCommentController
);
commentRouter.delete("/:id", ensureAuthMiddleware, deleteCommentController)
