import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";

export const deleteCommentService = async (idParam: string): Promise<void> => {
  const commentsRepository = AppDataSource.getRepository(Comment);

  const findComment = await commentsRepository.findOneBy({
    id: idParam,
  });

  if (!findComment) {
    throw new AppError("Comment not found", 404);
  }

  commentsRepository.delete(idParam);
};
