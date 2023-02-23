import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTableAnnouncementsAndCreateTableImage1677150628817 implements MigrationInterface {
    name = 'alterTableAnnouncementsAndCreateTableImage1677150628817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "img" character varying, "announcementId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "is_active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "type_vehicle"`);
        await queryRunner.query(`CREATE TYPE "public"."announcements_type_vehicle_enum" AS ENUM('car', 'motorcycle')`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "type_vehicle" "public"."announcements_type_vehicle_enum" NOT NULL DEFAULT 'car'`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "type"`);
        await queryRunner.query(`CREATE TYPE "public"."announcements_type_enum" AS ENUM('sales', 'mudar')`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "type" "public"."announcements_type_enum" NOT NULL DEFAULT 'sales'`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_fac6198a89ec23116ca0352104d" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_fac6198a89ec23116ca0352104d"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."announcements_type_enum"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "type" character varying NOT NULL DEFAULT 'sales'`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "type_vehicle"`);
        await queryRunner.query(`DROP TYPE "public"."announcements_type_vehicle_enum"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "type_vehicle" character varying NOT NULL DEFAULT 'car'`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "images" text array`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}
