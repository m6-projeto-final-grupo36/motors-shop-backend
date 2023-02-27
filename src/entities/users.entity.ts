import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { IsEmail, IsDateString, IsEnum, Matches } from "class-validator";
import { Announcement } from "./announcement.entity";
import { Address } from "./addresses.entity";
import { Comment } from "./comments.entity";

export enum UserType {
  Buyer = "buyer",
  Advertiser = "advertiser",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ length: 150, type: "varchar" })
  @IsEmail()
  email: string;

  @Column({ length: 11, unique: true })
  @Matches(/^(\d{3}\.){2}\d{3}-\d{2}$/)
  cpf: string;

  @Column({ length: 11 })
  @Matches(/^[1-9]{2}(?:9[2-9]|[1-9][0-9])[0-9]{8}$/)
  cell_phone: string;

  @Column({ type: "date" })
  // @IsDateString()
  birthdate: Date;

  @Column({ type: "text" })
  description: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ type: "enum", enum: ["buyer", "advertiser"], default: 'buyer'})
  type_account: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Announcement, (announcements) => announcements.user, {
    onDelete: "CASCADE",
    eager: true,
  })
  announcements: Announcement[];

  @OneToMany(() => Comment, (comments) => comments.user)
  comments: Comment[];
}
