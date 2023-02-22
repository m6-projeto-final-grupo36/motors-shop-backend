import { object, string, Schema, number, boolean } from "yup";

import { IAnnouncementRequest } from "../../interfaces/announcement/announcement";

const createAnnouncementValidator: Schema<IAnnouncementRequest> =
  object().shape({
    title: string().required("title is required"),
    year: string().required("year is required").max(4),
    mileage: string().required("mileage is required"),
    price: number().required("price is required"),
    description: string().required("description is required"),
    img_cape: string().required("img_cape is required"),
    images: string(),
    isActive: boolean(),
    type_vehicle: string().required("type_vehicle is required"),
    type: string().required("type is required"),
  });

export { createAnnouncementValidator };
