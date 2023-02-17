import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Announcement } from "../../entities/announcement.entity";
import { createAnnouncementService } from "../../services/announcement/createAnnouncement.service";
import { listAnnouncementsService } from "../../services/announcement/listAnnouncement.service";

const createAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcementData = await req.body;
  const announcement: Announcement = await createAnnouncementService(announcementData);
  return res.status(201).send(instanceToPlain(announcement));
};

const listAnnouncementController = async (req: Request, res: Response) => {
  const announcements = await listAnnouncementsService();

  return res.json(announcements);
};

export { createAnnouncementController, listAnnouncementController };
