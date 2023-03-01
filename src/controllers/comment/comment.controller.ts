import { createCommentService } from "../../services/comment/createComment.service";
import { Request, Response } from "express";

export const createCommentController = async (req: Request, res: Response) => {
  const commentText = req.validatedBody;
  const userId = req.user.id;
  const announcementId = req.params.id;
  const comment = await createCommentService(
    commentText,
    userId,
    announcementId
  );
  return res.status(201).send(comment);
};
