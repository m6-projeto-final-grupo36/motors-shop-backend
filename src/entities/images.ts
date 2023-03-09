import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Announcement } from "./announcement.entity";

@Entity("images")
export class Image {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ nullable: true })
  img: string;

  @ManyToOne(() => Announcement, (announcement) => announcement.images, {
    onDelete: "CASCADE",
  })
  announcement: Announcement;
}
