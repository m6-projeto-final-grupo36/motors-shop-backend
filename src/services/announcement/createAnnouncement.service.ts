import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const createAnnouncementService = async (announcementData: any) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const newAnnouncement: Announcement = new Announcement();
  newAnnouncement.title = announcementData.title;
  newAnnouncement.year = announcementData.year;
  newAnnouncement.mileage = announcementData.mileage;
  newAnnouncement.price = announcementData.price;
  newAnnouncement.description = announcementData.description;
  newAnnouncement.img_cape = announcementData.img_cape;
  newAnnouncement.images = announcementData.images;
  newAnnouncement.isActive = announcementData.isActive;
  newAnnouncement.type_vehicle = announcementData.type_vehicle;
  newAnnouncement.type = announcementData.type;
  
  await announcementRepository.save(newAnnouncement);

  const AnnouncementCreated: Announcement | null =
    await announcementRepository.findOneBy({
      id: newAnnouncement.id,
    });

  return AnnouncementCreated!;
};
