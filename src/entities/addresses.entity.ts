import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 8, type: "varchar" })
  cep: string;

  @Column({ length: 2, type: "varchar" })
  state: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  road: string;

  @Column({ type: "int" })
  number: number;

  @Column({ nullable: true })
  complement: string;
}
