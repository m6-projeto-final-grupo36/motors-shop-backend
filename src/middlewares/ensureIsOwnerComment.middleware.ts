import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Comment } from "../entities/comments.entity";
import { AppError } from "../errors/appError";

export const ensureIsOwnerCommentMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const commentRepositoy = AppDataSource.getRepository(Comment);

  const commentId = req.params.id;

  const comment = await commentRepositoy.findOne({
    where: {
      id: commentId,
    },
    relations: ["user"],
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.user.id !== req.user.id) {
    throw new AppError("Unauthorized", 401);
  }

  next();
};
