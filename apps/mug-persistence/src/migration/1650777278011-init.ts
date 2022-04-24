import {MigrationInterface, QueryRunner} from "typeorm";

export class init1650777278011 implements MigrationInterface {
    name = 'init1650777278011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mug" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isActive" boolean NOT NULL DEFAULT true, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(300) NOT NULL, "mainColor" character varying(300) NOT NULL, "theme" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, "img_url" character varying(255) NOT NULL, "buy_url" character varying(255) NOT NULL, CONSTRAINT "PK_9318f58f8a4063fa77a48c85979" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mug"`);
    }

}
