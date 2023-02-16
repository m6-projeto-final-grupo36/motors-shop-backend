import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1676553922978 implements MigrationInterface {
    name = 'createTables1676553922978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "advertisers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "year" character varying(4) NOT NULL, "mileage" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "img_cape" character varying NOT NULL, "images" character varying, "isActive" boolean NOT NULL DEFAULT true, "type_vehicle" character varying NOT NULL DEFAULT 'car', "type" character varying NOT NULL DEFAULT 'sales', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a0618516584bd6609576d6a9ff5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "advertisers"`);
    }

}
