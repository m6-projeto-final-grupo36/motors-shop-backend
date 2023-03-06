import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IAddressUpdate } from "../../interfaces/user/user";

export const updateAddressService = async (
  data: IAddressUpdate,
  user_id: string
) => {
  const { cep, city, complement, number, road, state } = data;
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const findUser = await userRepository.findOne({
    where: { id: user_id },
    relations: { address: true },
  });

  if (!findUser) {
    throw new AppError("Announcement not found", 404);
  }

  const findAddress = await addressRepository.findOne({
    where: { id: findUser.address.id },
  });

  if (!findAddress) {
    throw new AppError("Address not found", 404);
  }

  await addressRepository.update(findAddress.id, {
    cep: cep ? cep : findAddress.cep,
    city: city ? city : findAddress.city,
    complement: complement ? complement : findAddress.complement,
    number: number ? number : findAddress.number,
    road: road ? road : findAddress.road,
    state: state ? state : findAddress.state,
  });

  const response: any = {
    ...findUser,
    address: { ...findAddress, ...data },
  };

  const addressUpdated = await userRepository.findOne({
    where: { id: user_id },
    relations: { address: true },
  });

  return addressUpdated!;
};
