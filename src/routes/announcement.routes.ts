import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementsController,
} from "../controllers/announcement/announcement.controller";

export const announcementRouter = Router();

announcementRouter.post("", createAnnouncementController);
announcementRouter.get("", listAnnouncementsController);
announcementRouter.delete('/:id', deleteAnnouncementController)
