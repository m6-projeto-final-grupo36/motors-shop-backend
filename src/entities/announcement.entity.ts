import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Comment } from "./comments.entity";
import { Image } from "./images";
import { User } from "./users.entity";

export type AnnouncementType_vehicleType = "car" | "motorcycle";
export type AnnouncementType_typeType = "sales" | "auction";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ length: 4 })
  year: string;

  @Column({ type: "varchar" })
  mileage: string;

  @Column("int")
  price: number;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  img_cape: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ type: "enum", enum: ["car", "motorcycle"], default: "car" })
  type_vehicle: AnnouncementType_vehicleType;

  @Column({ type: "enum", enum: ["sales", "auction"], default: "sales" })
  type: AnnouncementType_typeType;

  @CreateDateColumn({ type: "date" })
  created_at: Date;

  @UpdateDateColumn({ type: "date" })
  updated_at: Date;

  @OneToMany(() => Image, (image) => image.announcement)
  images: Image[];

  @OneToMany(() => Comment, (comment) => comment.announcement)
  comments: Comment[];

  @ManyToOne(() => User, (user) => user.announcements)
  user: User[];
}
