export interface IAnnouncementRequest {
  title: string;
  year: string;
  mileage: string;
  price: number;
  description: string;
  img_cape: string;
  type_vehicle: "car" | "motorcycle";
  images: string[];
  type: "sales" | "auction";
  is_active?: boolean;
}

export interface IAnnouncement extends IAnnouncementRequest {
  id: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface IAnnouncementUpdate {
  title?: string;
  year?: string;
  mileage?: string;
  price?: number;
  description?: string;
  img_cape?: string;
  type_vehicle?: "car" | "motorcycle";
  images?: string[];
  type?: "sales" | "auction";
  is_active?: boolean;
}
