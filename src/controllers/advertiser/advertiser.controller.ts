import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Advertiser } from "../../entities/advertiser.entity";
import { createAdvertiserService } from "../../services/advertiser/createAdvertiser.service";

const createAdvertiserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertiserData = await req.body;
  const advertiser: Advertiser = await createAdvertiserService(advertiserData);
  return res.status(201).send(instanceToPlain(advertiser));
};

export { createAdvertiserController };
