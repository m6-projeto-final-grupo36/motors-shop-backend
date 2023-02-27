import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Image } from "../../entities/images";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IAnnouncementRequest } from "../../interfaces/announcement/announcement";

export const createAnnouncementService = async ({
  title,
  year,
  mileage,
  price,
  description,
  img_cape,
  type_vehicle,
  type,
  images,
  is_active,
}: IAnnouncementRequest, userId: string) => {
  const announcementsRepository = AppDataSource.getRepository(Announcement);
  const imagesRepository = AppDataSource.getRepository(Image);
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({id: userId})

  const newAnnouncement = new Announcement();
  newAnnouncement.title = title;
  newAnnouncement.year = year;
  newAnnouncement.mileage = mileage;
  newAnnouncement.price = price;
  newAnnouncement.description = description;
  newAnnouncement.img_cape = img_cape;
  newAnnouncement.type_vehicle = type_vehicle;
  newAnnouncement.type = type;
  newAnnouncement.user = user!

  const {cpf, cell_phone, birthdate, created_at, updated_at, announcements, password, ...userData } = user!

  if (is_active !== undefined) {
    newAnnouncement.is_active = is_active;
  }

  announcementsRepository.create(newAnnouncement);
  await announcementsRepository.save(newAnnouncement);

  if (!!images.length) {
    if (images.length > 6) throw new AppError("Maximum 6 images.", 400);

    images.forEach((img) => {
      const newImage = new Image();
      newImage.img = img;
      newImage.announcement = newAnnouncement;

      imagesRepository.save(newImage);
    });
  }

  const announcementResponse = { ...newAnnouncement, images, user: userData };

  return announcementResponse;
};
