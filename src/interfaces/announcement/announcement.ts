export interface IAnnouncementRequest {
  title: string;
  year: string;
  mileage: string;
  price: number;
  description?: string;
  img_cape?: string;
  images?: string;
  isActive?: boolean;
  type_vehicle: string;
  type: string;
}
