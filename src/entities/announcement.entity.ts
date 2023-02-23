import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Image } from "./images";

export type AnnouncementType_vehicleType = "car" | "motorcycle";
export type AnnouncementType_typeType = "sales" | "auction";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  title: string;

  @Column({ length: 4 })
  year: string;

  @Column()
  mileage: string;

  @Column("int")
  price: number;

  @Column()
  description: string;

  @Column()
  img_cape: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ type: "enum", enum: ["car", "motorcycle"], default: "car" })
  type_vehicle: AnnouncementType_vehicleType;

  @Column({ type: "enum", enum: ["sales", "auction"], default: "sales" })
  type: AnnouncementType_typeType;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Image, (image) => image.announcement)
  images: Image[];
}
