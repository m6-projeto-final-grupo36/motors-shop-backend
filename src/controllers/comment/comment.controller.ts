import { createCommentService } from "../../services/comment/createComment.service";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { deleteCommentService } from "../../services/comment/deleteComment.service";
import { updateCommentService } from "../../services/comment/updateComment.service";

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

export const deleteCommentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteCommentService(id);
  return res.status(204).send();
};

export const updateCommentController = async (req: Request, res: Response) => {
  const commentData = req.validatedBody;
  const { id } = req.params;
  const commentUpdated = await updateCommentService(commentData, id);

  return res.status(200).send(commentUpdated);
};
