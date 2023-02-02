import { MigrationInterface, QueryRunner } from "typeorm";

export class updateDb1675258441972 implements MigrationInterface {
    name = 'updateDb1675258441972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "position" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "salary" character varying NOT NULL, CONSTRAINT "PK_b7f483581562b4dc62ae1a5b7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salary_user" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "monthId" integer NOT NULL, "day" integer NOT NULL, "salaryMoney" character varying NOT NULL, CONSTRAINT "PK_b1fcc1b2b87e268f3f5a904c569" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "month" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e253c67eb75a81acf16f7f79323" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "positionId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_93af21ecba4fa43c4c63d2456cd" UNIQUE ("positionId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_93af21ecba4fa43c4c63d2456cd" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salary_user" ADD CONSTRAINT "FK_d3c358565e89e590edda8e0c8c3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salary_user" ADD CONSTRAINT "FK_335440cb5802d2be090bd50726d" FOREIGN KEY ("monthId") REFERENCES "month"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salary_user" DROP CONSTRAINT "FK_335440cb5802d2be090bd50726d"`);
        await queryRunner.query(`ALTER TABLE "salary_user" DROP CONSTRAINT "FK_d3c358565e89e590edda8e0c8c3"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_93af21ecba4fa43c4c63d2456cd"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_93af21ecba4fa43c4c63d2456cd"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "positionId"`);
        await queryRunner.query(`DROP TABLE "month"`);
        await queryRunner.query(`DROP TABLE "salary_user"`);
        await queryRunner.query(`DROP TABLE "position"`);
    }

}
