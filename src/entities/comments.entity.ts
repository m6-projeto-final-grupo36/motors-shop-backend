import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Announcement } from "./announcement.entity";
import { User } from "./users.entity";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "text" })
  text: string;

  @CreateDateColumn({ type: "date" })
  created_at: Date;

  @UpdateDateColumn({ type: "date" })
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.comments, {eager:true})
  user: User;

  @ManyToOne(() => Announcement, (announcement) => announcement.comments)
  announcement: Announcement;
}
