import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { AppError } from "../../errors/appError";

export const deleteAnnouncementService = async (idParam: string) => {
  const announcementsRepository = AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementsRepository.findOneBy({
    id: idParam,
  });

  if (!findAnnouncement) {
    throw new AppError("Announcement not found", 404);
  }

  announcementsRepository.delete(idParam);
};
