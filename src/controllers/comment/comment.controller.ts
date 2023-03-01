import { createCommentService } from "../../services/comment/createComment.service";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

export const createCommentController = async (req: Request, res: Response) => {
  const commentText = req.validatedBody;
  const userId = req.user.id;
  const announcementId = req.params.announcementId;

  const comment = await createCommentService(
    commentText,
    userId,
    announcementId
  );
  return res.status(201).send(instanceToPlain(comment));
};
