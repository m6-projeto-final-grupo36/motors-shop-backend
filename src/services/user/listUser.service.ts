import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

export const listUserService = async(): Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    return users
}