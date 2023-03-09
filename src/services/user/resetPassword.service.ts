import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import bcrypt from "bcryptjs";

export const resetPasswordService = async (
  userId: string,
  password: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { id: userId },
  });


  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  findUser.password = hashedPassword;

  await userRepository.update(userId, { password: hashedPassword });

  return { message: "Password updated successfully." };
};
