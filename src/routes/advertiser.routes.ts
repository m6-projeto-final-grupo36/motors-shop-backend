import { Router } from "express";
import { createAdvertiserController } from "../controllers/advertiser/advertiser.controller";

export const advertiserRouter = Router();

advertiserRouter.post("", createAdvertiserController);
