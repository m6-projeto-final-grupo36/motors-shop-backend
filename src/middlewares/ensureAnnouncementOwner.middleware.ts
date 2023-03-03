import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import { Announcement } from "../entities/announcement.entity";
import AppDataSource from "../data-source";

export const ensureAnnouncementOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const announcementsRepository = AppDataSource.getRepository(Announcement);
  const announcementId = req.params.id;

  const announcement = await announcementsRepository.findOne({
    where: {
      id: announcementId,
    },
    relations: ["user"],
  });

  if (!announcement) {
    throw new AppError("Announcement not found", 404);
  }

  if (announcement.user.id !== req.user.id) {
    throw new AppError("Unauthorized", 401);
  }

  next();
};
