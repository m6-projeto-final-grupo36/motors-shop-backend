import { Router } from "express";
import {
  createCommentController,
  deleteCommentController,
  updateCommentController,
} from "../controllers/comment/comment.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsOwnerCommentMiddleware } from "../middlewares/ensureIsOwnerComment.middleware";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import {
  createCommentValidator,
  updateCommentValidator,
} from "../schemas/comment/commentsSchemas";

export const commentRouter = Router();

commentRouter.post(
  "/:announcementId",
  ensureAuthMiddleware,
  validateSchema(createCommentValidator),
  createCommentController
);
commentRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerCommentMiddleware,
  validateSchema(updateCommentValidator),
  updateCommentController
);
commentRouter.delete(
  "/:id", //comments
  ensureAuthMiddleware,
  ensureIsOwnerCommentMiddleware,
  deleteCommentController
);
