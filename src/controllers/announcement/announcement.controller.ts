import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcement/createAnnouncement.service";
import { deleteAnnouncementService } from "../../services/announcement/deleteAnnouncement.service";
import { listAnnouncementsService } from "../../services/announcement/listAnnouncements.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const announcementData = req.validatedBody;
  const announcement = await createAnnouncementService(announcementData);
  return res.status(201).send(announcement);
};

const listAnnouncementsController = async (req: Request, res: Response) => {
  const announcements = await listAnnouncementsService();

  return res.json(announcements);
};

const deleteAnnouncementController = async (req: Request, res: Response) => {
  // Apenas o dono do anúncio pode acessar essa rota
  // Caso não seja o dono ou outro usuário (comprador ou anunciante) já gerar um erro no middleware
  // Pegar o id que vem por param e fazer o service
  const { id } = req.params;
  await deleteAnnouncementService(id);
  return res.status(204).send();
};

export {
  createAnnouncementController,
  listAnnouncementsController,
  deleteAnnouncementController,
};
