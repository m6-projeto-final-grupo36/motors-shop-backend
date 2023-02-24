import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Image } from "../../entities/images";
import { AppError } from "../../errors/appError";
import { IAnnouncementUpdate } from "../../interfaces/announcement/announcement";

export const updatedAnnouncementService = async (
  data: IAnnouncementUpdate,
  announcement_id: string
) => {
  const {
    description,
    images,
    img_cape,
    is_active,
    mileage,
    price,
    title,
    type,
    type_vehicle,
    year,
  } = data;
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementRepository.findOne({
    where: { id: announcement_id },
  });

  if (!findAnnouncement) {
    throw new AppError("Announcement not found", 404);
  }

  await announcementRepository.update(announcement_id, {
    description: description ? description : findAnnouncement.description,
    img_cape: img_cape ? img_cape : findAnnouncement.img_cape,
    is_active: is_active ? is_active : findAnnouncement.is_active,
    mileage: mileage ? mileage : findAnnouncement.mileage,
    price: price ? price : findAnnouncement.price,
    title: title ? title : findAnnouncement.title,
    type: type ? type : findAnnouncement.type,
    type_vehicle: type_vehicle ? type_vehicle : findAnnouncement.type_vehicle,
    year: year ? year : findAnnouncement.year,
  });

  const imagesRepository = AppDataSource.getRepository(Image);

  imagesRepository.delete({ announcement: { id: announcement_id } });

  if (images && images.length > 0) {
    if (images.length > 6) throw new AppError("Maximum 6 images.", 400);

    images.forEach((img) => {
      const newImage = new Image();
      newImage.img = img;
      newImage.announcement = findAnnouncement;
      imagesRepository.save(newImage);
    });
  }

  const response = { ...findAnnouncement, ...data };

  return response;
};
