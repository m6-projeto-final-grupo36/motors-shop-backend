import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

export const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  userRepository.delete(userId);
};
