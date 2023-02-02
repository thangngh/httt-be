import { MigrationInterface, QueryRunner } from "typeorm";

export class genDb1675334492132 implements MigrationInterface {
    name = 'genDb1675334492132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_93af21ecba4fa43c4c63d2456cd"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_93af21ecba4fa43c4c63d2456c"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_93af21ecba4fa43c4c63d2456cd" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_93af21ecba4fa43c4c63d2456cd"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_93af21ecba4fa43c4c63d2456c" UNIQUE ("positionId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_93af21ecba4fa43c4c63d2456cd" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
