import {MigrationInterface, QueryRunner} from "typeorm";

export class userFavoriteMugs1652224365631 implements MigrationInterface {
    name = 'userFavoriteMugs1652224365631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_favorites_mug" ("userId" uuid NOT NULL, "mugId" uuid NOT NULL, CONSTRAINT "PK_266e4a78f59cfada54ebb81510f" PRIMARY KEY ("userId", "mugId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d32c38adabadfa65d643ea71e8" ON "user_favorites_mug" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_67fe9e55c003dc50224c8a527a" ON "user_favorites_mug" ("mugId") `);
        await queryRunner.query(`CREATE TABLE "mug_favorited_by_user" ("mugId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_ae90ae071ca100089d46243d492" PRIMARY KEY ("mugId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e07c9e10c51f32331abca8949a" ON "mug_favorited_by_user" ("mugId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3becb727d56c9dc1c289a8b3b6" ON "mug_favorited_by_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "user_favorites_mug" ADD CONSTRAINT "FK_d32c38adabadfa65d643ea71e81" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_favorites_mug" ADD CONSTRAINT "FK_67fe9e55c003dc50224c8a527ad" FOREIGN KEY ("mugId") REFERENCES "mug"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "mug_favorited_by_user" ADD CONSTRAINT "FK_e07c9e10c51f32331abca8949ab" FOREIGN KEY ("mugId") REFERENCES "mug"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "mug_favorited_by_user" ADD CONSTRAINT "FK_3becb727d56c9dc1c289a8b3b66" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mug_favorited_by_user" DROP CONSTRAINT "FK_3becb727d56c9dc1c289a8b3b66"`);
        await queryRunner.query(`ALTER TABLE "mug_favorited_by_user" DROP CONSTRAINT "FK_e07c9e10c51f32331abca8949ab"`);
        await queryRunner.query(`ALTER TABLE "user_favorites_mug" DROP CONSTRAINT "FK_67fe9e55c003dc50224c8a527ad"`);
        await queryRunner.query(`ALTER TABLE "user_favorites_mug" DROP CONSTRAINT "FK_d32c38adabadfa65d643ea71e81"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3becb727d56c9dc1c289a8b3b6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e07c9e10c51f32331abca8949a"`);
        await queryRunner.query(`DROP TABLE "mug_favorited_by_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_67fe9e55c003dc50224c8a527a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d32c38adabadfa65d643ea71e8"`);
        await queryRunner.query(`DROP TABLE "user_favorites_mug"`);
    }

}
