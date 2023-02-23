import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const listAnnouncementsService = async () => {
  const announcementsRepository = AppDataSource.getRepository(Announcement);

  const announcements = await announcementsRepository.find();

  return announcements;
};
