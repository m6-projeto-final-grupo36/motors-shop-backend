import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";
import { ICommentUpdate } from "../../interfaces/comment/comment";

export const updateCommentService = async (
  commentData: ICommentUpdate,
  comment_id: string
) => {
  const { text } = commentData;

  const commentRepository = AppDataSource.getRepository(Comment);

  const findComment = await commentRepository.findOne({
    where: { id: comment_id },
  });

  if (!findComment) {
    throw new AppError("Comment not found", 404);
  }

  const dataToUpdate: Partial<Comment> = {
    text: text ?? findComment.text,
  };

  await commentRepository.update(comment_id, dataToUpdate);

  const { password, ...userWithoutPassword } = findComment.user;
  return { ...findComment, user: userWithoutPassword, ...commentData };
};
