import { MigrationInterface, QueryRunner } from "typeorm";

export class createDb1675324535008 implements MigrationInterface {
    name = 'createDb1675324535008'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "position" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "salary" character varying NOT NULL, CONSTRAINT "PK_b7f483581562b4dc62ae1a5b7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "isactive" boolean NOT NULL DEFAULT true, "avatar" character varying, "positionId" integer NOT NULL, "stateId" integer, CONSTRAINT "REL_93af21ecba4fa43c4c63d2456c" UNIQUE ("positionId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salary_user" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "monthId" integer NOT NULL, "day" integer NOT NULL, "salaryMoney" character varying NOT NULL, CONSTRAINT "PK_b1fcc1b2b87e268f3f5a904c569" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "month" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e253c67eb75a81acf16f7f79323" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_93af21ecba4fa43c4c63d2456cd" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salary_user" ADD CONSTRAINT "FK_d3c358565e89e590edda8e0c8c3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salary_user" ADD CONSTRAINT "FK_335440cb5802d2be090bd50726d" FOREIGN KEY ("monthId") REFERENCES "month"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salary_user" DROP CONSTRAINT "FK_335440cb5802d2be090bd50726d"`);
        await queryRunner.query(`ALTER TABLE "salary_user" DROP CONSTRAINT "FK_d3c358565e89e590edda8e0c8c3"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_93af21ecba4fa43c4c63d2456cd"`);
        await queryRunner.query(`DROP TABLE "month"`);
        await queryRunner.query(`DROP TABLE "salary_user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "position"`);
    }

}
