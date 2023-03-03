import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementsController,
  updateAnnouncementController,
  listRetrieveAnnouncementController,
} from "../controllers/announcement/announcement.controller";
import { ensureAnnouncementOwnerMiddleware } from "../middlewares/ensureAnnouncementOwner.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsAdvertiserUserMiddleware } from "../middlewares/ensureIsAdvertiserUser.middleware";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import {
  createAnnouncementValidator,
  updateAnnouncementValidator,
} from "../schemas/announcement/announcementsSchemas";

export const announcementRouter = Router();

announcementRouter.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdvertiserUserMiddleware,
  validateSchema(createAnnouncementValidator),
  createAnnouncementController
);
announcementRouter.get("", listAnnouncementsController);
announcementRouter.get("/:id", listRetrieveAnnouncementController);
announcementRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdvertiserUserMiddleware,
  ensureAnnouncementOwnerMiddleware,
  validateSchema(updateAnnouncementValidator),
  updateAnnouncementController
);
announcementRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdvertiserUserMiddleware,
  ensureAnnouncementOwnerMiddleware,
  deleteAnnouncementController
);
