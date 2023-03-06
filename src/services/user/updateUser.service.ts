import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/user/user";

export const updateUserService = async (data: IUserUpdate, user_id: string): Promise<User> => {
  const {
    birthdate,
    cell_phone,
    cpf,
    description,
    email,
    name,
    password,
    type_account,
  } = data;
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const findUser = await userRepository.findOne({
    where: { id: user_id },
    relations: { address: true },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if(email){
    const emailAlreadyExist = await userRepository.findOne({
      where: {
        email
      }
    })

    if(emailAlreadyExist){
      throw new AppError('Email already being used', 403)
    }
  }

  
  if(cpf){
    const cpfAlreadyExist = await userRepository.findOne({
      where: {
        cpf  
      }
    })

    if(cpfAlreadyExist){
      throw new AppError('CPF already being used', 403)
    }    
  }


  const findAddress = await addressRepository.findOne({
    where: { id: findUser.address.id },
  });

  if (!findAddress) {
    throw new AppError("Address not found", 404);
  }

  await userRepository.update(user_id, {
    name: name ? name : findUser.name,
    birthdate: birthdate ? birthdate : findUser.birthdate,
    cell_phone: cell_phone ? cell_phone : findUser.cell_phone,
    cpf: cpf ? cpf : findUser.cpf,
    description: description ? description : findUser.description,
    email: email ? email : findUser.email,
    password: password ? password : findUser.password,
    type_account: type_account ? type_account : findUser.type_account,
  });

  const userUpdated = await userRepository.findOneBy({id: user_id})

  return userUpdated!;
};
