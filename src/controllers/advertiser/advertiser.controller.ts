import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Advertiser } from "../../entities/advertiser.entity";
import { createAdvertiserService } from "../../services/advertiser/createAdvertiser.service";
import { listAdvertisementsService } from "../../services/advertiser/listAdvertiser.service";

const createAdvertiserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertiserData = await req.body;
  const advertiser: Advertiser = await createAdvertiserService(advertiserData);
  return res.status(201).send(instanceToPlain(advertiser));
};

const listAdvertisementController = async (
  req: Request,
  res: Response
) => {
  const advertisements = await listAdvertisementsService();

  return res.json(advertisements);
};

export { createAdvertiserController, listAdvertisementController };
