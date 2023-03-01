import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";
import { instanceToPlain } from "class-transformer";
import { listRetrieveUserService } from "../../services/user/listRetrieveUser.service";
import { listUsersService } from "../../services/user/listUsers.service";
import { deleteUserService } from "../../services/user/deleteUser.service";
import { updateUserService } from "../../services/user/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData = req.validatedBody;
  const user = await createUserService(userData);
  return res.status(201).json(instanceToPlain(user));
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(instanceToPlain(users));
};

export const listRetrieveUserController = async (
  req: Request,
  res: Response
) => {
  const idParam = req.params.id;
  const user = await listRetrieveUserService(idParam);
  return res.json(instanceToPlain(user));
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.user.id;

  await deleteUserService(userId);
  return res.status(204).send();
};

export const updateUserController = async (req: Request, res: Response) => {
  const userUpdateData = req.validatedBody;
  const { id } = req.params;
  const userUpdated = await updateUserService(userUpdateData, id);

  return res.status(200).send(userUpdated);
};
