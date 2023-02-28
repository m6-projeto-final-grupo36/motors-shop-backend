import { Router } from "express";
import { createCommentController } from "../controllers/comment/comment.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

export const commentRouter = Router();

commentRouter.post("/:announcementId", ensureAuthMiddleware, createCommentController)