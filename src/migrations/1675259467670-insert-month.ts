import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertMonth1675259467670 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 1')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 2')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 3')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 4')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 5')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 6')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 7')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 8')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 9')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 10')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 11')`);
    await queryRunner.query(`INSERT INTO month (name) VALUES ('Tháng 12')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM month`);
  }
}
