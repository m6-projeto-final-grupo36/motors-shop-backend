import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Announcement } from "../../entities/announcement.entity";
import { createAdvertiserService } from "../../services/announcement/createAnnouncement.service";
import { listAdvertisementsService } from "../../services/announcement/listAdvertiser.service";

const createAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcementData = await req.body;
  const announcement: Announcement = await createAdvertiserService(announcementData);
  return res.status(201).send(instanceToPlain(announcement));
};

const listAdvertisementController = async (req: Request, res: Response) => {
  const advertisements = await listAdvertisementsService();

  return res.json(advertisements);
};

export { createAnnouncementController, listAdvertisementController };
