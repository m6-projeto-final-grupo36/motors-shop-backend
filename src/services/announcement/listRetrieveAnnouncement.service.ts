import AppDataSource from "../../data-source"
import { Announcement } from "../../entities/announcement.entity"
import { AppError } from "../../errors/appError"

export const listRetrieveAnnouncementService = async(idParam: string) => {
    const announcementsRepository = AppDataSource.getRepository(Announcement)

    const announcement = await announcementsRepository.findOne({
        where: {
            id: idParam
        },
        relations: {
            images: true
        }
    })

    if(!announcement){
        throw new AppError("Announcement not found", 404);
    }

    return announcement
}