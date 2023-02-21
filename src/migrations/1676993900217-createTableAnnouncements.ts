import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableAnnouncements1676993900217 implements MigrationInterface {
    name = 'createTableAnnouncements1676993900217'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "announcements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "year" character varying(4) NOT NULL, "mileage" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "img_cape" character varying NOT NULL, "images" text array, "isActive" boolean NOT NULL DEFAULT true, "type_vehicle" character varying NOT NULL DEFAULT 'car', "type" character varying NOT NULL DEFAULT 'sales', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b3ad760876ff2e19d58e05dc8b0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "announcements"`);
    }

}
