import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";

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

  @Column('int')
  price: number;

  @Column()
  description: string;

  @Column()
  img_cape: string;

  @Column("text", { nullable: true, array: true })
  images: string[];

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: "car" })
  type_vehicle: string;

  @Column({ default: "sales" })
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
