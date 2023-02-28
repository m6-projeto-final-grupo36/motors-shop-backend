import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

export const listRetrieveUserService = async(id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id})

    if(!user){
        throw new AppError('User not found', 404)
    }

    return user
}