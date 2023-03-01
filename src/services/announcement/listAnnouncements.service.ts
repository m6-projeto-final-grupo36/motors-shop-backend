import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const listAnnouncementsService = async (): Promise<Announcement[]> => {
  const announcementsRepository = AppDataSource.getRepository(Announcement);

  const announcements = await announcementsRepository.find(
    {
      relations: {
        user: true
      }
    }
    );
  
  return announcements;
};
