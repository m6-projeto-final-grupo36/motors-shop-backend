import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { ICreateUser } from "../../interfaces/user/user";

export const createUserService = async ({
  name,
  email,
  cpf,
  cell_phone,
  birthdate,
  description,
  password,
  address,
  type_account,
}: ICreateUser): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const addressRepository = AppDataSource.getRepository(Address);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError("A user with this cpf or email already exists");
  }

  const cpfAlreadyExists = users.find((user) => user.cpf === cpf);

  if (cpfAlreadyExists) {
    throw new AppError("A user with this cpf or email already exists");
  }

  const newAddress = addressRepository.create(address);

  await addressRepository.save(newAddress);

  const newUser = {
    name,
    email,
    birthdate,
    password,
    cell_phone,
    cpf,
    description,
    type_account: type_account!,
    address: newAddress,
  };

  const userCreated = userRepository.create(newUser);

  await userRepository.save(userCreated);

  return userCreated;
};
