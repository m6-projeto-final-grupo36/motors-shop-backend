import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementsController,
  listRetrieveAnnouncementController,
} from "../controllers/announcement/announcement.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { createAnnouncementValidator } from "../schemas/announcement/createAnnouncement";

export const announcementRouter = Router();

announcementRouter.get("", listAnnouncementsController);
announcementRouter.get('/:id', listRetrieveAnnouncementController)
announcementRouter.delete('/:id', deleteAnnouncementController);
announcementRouter.post(
  "",
  validateSchema(createAnnouncementValidator),
  createAnnouncementController
);
