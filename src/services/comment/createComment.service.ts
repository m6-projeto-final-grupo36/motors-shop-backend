import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { Announcement } from "../../entities/announcement.entity";
import { User } from "../../entities/users.entity";
import { IComment } from "../../interfaces/comment/comment";
import { AppError } from "../../errors/appError";

export const createCommentService = async ({text}: IComment, userId: string, announcementId: string): Promise<Comment> => {
    const commentRepositoy = AppDataSource.getRepository(Comment)
    const announcementRepository = AppDataSource.getRepository(Announcement)
    const userRepository = AppDataSource.getRepository(User)
    
    const announcement = await announcementRepository.findOneBy({
        id: announcementId
    })
    const user = await userRepository.findOneBy({
        id: userId
    })

    if(!announcement){
        throw new AppError('Announcement not found.', 404)
    }

    const newComment = new Comment()
    newComment.text = text
    newComment.announcement = announcement
    newComment.user = user!

    const commentCreated = commentRepositoy.create(newComment);
    await commentRepositoy.save(commentCreated);

    return commentCreated
}