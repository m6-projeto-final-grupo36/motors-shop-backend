import AppDataSource from "../../data-source";
import { Advertiser } from "../../entities/advertiser.entity";

export const createAdvertiserService = async (advertiserData: any) => {
  const advertiserRepository = AppDataSource.getRepository(Advertiser);

  const newAdvertiser: Advertiser = new Advertiser();
  newAdvertiser.title = advertiserData.title;
  newAdvertiser.year = advertiserData.year;
  newAdvertiser.mileage = advertiserData.mileage;
  newAdvertiser.price = advertiserData.price;
  newAdvertiser.description = advertiserData.description;
  newAdvertiser.img_cape = advertiserData.img_cape;
  newAdvertiser.images = advertiserData.images;
  newAdvertiser.isActive = advertiserData.isActive;
  newAdvertiser.type_vehicle = advertiserData.type_vehicle;
  newAdvertiser.type = advertiserData.type;
  newAdvertiser.createdAt = new Date();
  newAdvertiser.updatedAt = new Date();

  await advertiserRepository.save(newAdvertiser);

  const advertiserCreated: Advertiser | null =
    await advertiserRepository.findOneBy({
      id: newAdvertiser.id,
    });

  return advertiserCreated!;
};
