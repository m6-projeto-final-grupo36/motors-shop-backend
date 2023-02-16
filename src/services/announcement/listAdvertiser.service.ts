import AppDataSource from "../../data-source";
import { Advertiser } from "../../entities/announcement.entity";

export const listAdvertisementsService = async (): Promise<Advertiser[]> => {
  const advertisementRepository = AppDataSource.getRepository(Advertiser);

  const advertisements = await advertisementRepository.find();

  return advertisements;
};
