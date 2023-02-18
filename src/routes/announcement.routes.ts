import { Router } from "express";
import {
  createAnnouncementController,
  listAnnouncementController,
} from "../controllers/announcement/announcement.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { createAnnouncementValidator } from "../schemas/announcement/createAnnouncement";

export const announcementRouter = Router();

announcementRouter.post(
  "",
  validateSchema(createAnnouncementValidator),
  createAnnouncementController
);
announcementRouter.get("", listAnnouncementController);
