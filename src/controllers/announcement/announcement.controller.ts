import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcement/createAnnouncement.service";
import { deleteAnnouncementService } from "../../services/announcement/deleteAnnouncement.service";
import { listAnnouncementsService } from "../../services/announcement/listAnnouncements.service";
import { updatedAnnouncementService } from "../../services/announcement/updateAnnouncement.service";
import { listRetrieveAnnouncementService } from "../../services/announcement/listRetrieveAnnouncement.service";
import { instanceToPlain } from "class-transformer";

export const createAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcementData = req.validatedBody;
  const userId = req.user.id
  const announcement = await createAnnouncementService(announcementData, userId);
  return res.status(201).send(announcement);
};

export const listAnnouncementsController = async (
  req: Request,
  res: Response
) => {
  const announcements = await listAnnouncementsService();

  return res.json(instanceToPlain(announcements));
};

export const listRetrieveAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const announcement = await listRetrieveAnnouncementService(id);
  return res.json(instanceToPlain(announcement));
};

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  await deleteAnnouncementService(id);
  return res.status(204).send();
};

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcementeUpdateData = req.validatedBody;
  const { id } = req.params;
  const announcementUpdated = await updatedAnnouncementService(
    announcementeUpdateData,
    id
  );

  return res.status(200).send(announcementUpdated);
};
