import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAnnouncementTypeVehicleType1677157135446 implements MigrationInterface {
    name = 'updateAnnouncementTypeVehicleType1677157135446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."announcements_type_enum" RENAME TO "announcements_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."announcements_type_enum" AS ENUM('sales', 'auction')`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "type" TYPE "public"."announcements_type_enum" USING "type"::"text"::"public"."announcements_type_enum"`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "type" SET DEFAULT 'sales'`);
        await queryRunner.query(`DROP TYPE "public"."announcements_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."announcements_type_enum_old" AS ENUM('sales', 'mudar')`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "type" TYPE "public"."announcements_type_enum_old" USING "type"::"text"::"public"."announcements_type_enum_old"`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "type" SET DEFAULT 'sales'`);
        await queryRunner.query(`DROP TYPE "public"."announcements_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."announcements_type_enum_old" RENAME TO "announcements_type_enum"`);
    }

}
