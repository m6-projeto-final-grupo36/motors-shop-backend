import { object, string, number, mixed, array, boolean } from "yup";
import { SchemaOf } from "yup";
import { IAnnouncementRequest } from "../../interfaces/announcement/announcement";

export const createAnnouncementValidator: SchemaOf<IAnnouncementRequest> =
  object().shape({
    title: string().required("title is required"),
    year: string().required("year is required").max(4),
    mileage: string().required("mileage is required"),
    price: number().required("price is required"),
    description: string().required("description is required"),
    img_cape: string().required("img_cape is required"),
    type_vehicle: mixed().oneOf(["car", "motorcycle"]).default("car"),
    type: mixed().oneOf(["sales", "auction"]).default("sales"),
    images: array().default([]),
    is_active: boolean().default(true),
  });
