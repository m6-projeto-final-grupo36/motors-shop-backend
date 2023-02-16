import { Router } from "express";
import {
  createAnnouncementController,
  listAdvertisementController,
} from "../controllers/announcement/announcement.controller";

export const announcementRouter = Router();

announcementRouter.post("", createAnnouncementController);
announcementRouter.get("", listAdvertisementController);
