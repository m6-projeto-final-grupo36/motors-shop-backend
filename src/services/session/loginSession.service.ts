import { ILogin } from "../../interfaces/session/session";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { compare } from "bcryptjs";

export const loginSessionService = async ({ email, password }: ILogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const userFound = await userRepository.findOne({
    where: { email: email },
    relations: { address: true },
  });

  if (!userFound) {
    throw new AppError("Invalid email or password", 403);
  }

  const passwordVerify = await compare(password, userFound.password);

  if (!passwordVerify) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign(
    {
      account: userFound.type_account,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: userFound.id,
    }
  );

  const response: any = { token, user: { ...userFound } };
  delete response.user.password;

  return response;
};
