import { Router } from "express";
import { createAdvertiserController, listAdvertisementController } from "../controllers/advertiser/advertiser.controller";

export const advertiserRouter = Router();

advertiserRouter.post("", createAdvertiserController);
advertiserRouter.get("", listAdvertisementController);
