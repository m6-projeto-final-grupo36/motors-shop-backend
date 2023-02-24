import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementsController,
  updateAnnouncementController,
  listRetrieveAnnouncementController,
} from "../controllers/announcement/announcement.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import {
  createAnnouncementValidator,
  updateAnnouncementValidator,
} from "../schemas/announcement/createAnnouncement";

export const announcementRouter = Router();

announcementRouter.post(
  "",
  validateSchema(createAnnouncementValidator),
  createAnnouncementController
);
announcementRouter.get("", listAnnouncementsController);
announcementRouter.get('/:id', listRetrieveAnnouncementController)
announcementRouter.patch(
  "/:id",
  validateSchema(updateAnnouncementValidator),
  updateAnnouncementController
);
announcementRouter.delete("/:id", deleteAnnouncementController);
