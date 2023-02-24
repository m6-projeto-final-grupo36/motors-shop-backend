import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcement/createAnnouncement.service";
import { deleteAnnouncementService } from "../../services/announcement/deleteAnnouncement.service";
import { listAnnouncementsService } from "../../services/announcement/listAnnouncements.service";
import { updatedAnnouncementService } from "../../services/announcement/updateAnnouncement.service";

export const createAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcementData = req.validatedBody;
  const announcement = await createAnnouncementService(announcementData);
  return res.status(201).send(announcement);
};

export const listAnnouncementsController = async (
  req: Request,
  res: Response
) => {
  const announcements = await listAnnouncementsService();

  return res.json(announcements);
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
