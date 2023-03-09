import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { AppError } from "../../errors/appError";

export const listRetrieveAnnouncementService = async (idParam: string) => {
  const announcementsRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementsRepository.findOne({
    where: {
      id: idParam,
    },
    relations: {
      images: true,
      user: true,
      comments:true
    },
  });

  if (!announcement) {
    throw new AppError("Announcement not found", 404);
  }

  const response: any = { ...announcement };

  if (announcement.images.length) {
    const images = announcement.images.map((image) => image.img);
    response.images = images;
  }

  return response;
};
