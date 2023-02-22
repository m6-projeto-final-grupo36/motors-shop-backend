import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementsController,
} from "../controllers/announcement/announcement.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { createAnnouncementValidator } from "../schemas/announcement/createAnnouncement";

export const announcementRouter = Router();

announcementRouter.get("", listAnnouncementsController);
announcementRouter.delete('/:id', deleteAnnouncementController)
announcementRouter.post(
  "",
  validateSchema(createAnnouncementValidator),
  createAnnouncementController
);
