import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertPosition1675259967834 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO position (name,salary) VALUES ('Director', 500)`,
    );
    await queryRunner.query(
      `INSERT INTO position (name,salary) VALUES ('Manager', 400 )`,
    );
    await queryRunner.query(
      `INSERT INTO position (name,salary) VALUES ('Department Manage', 450)`,
    );
    await queryRunner.query(
      `INSERT INTO position (name,salary) VALUES ('Employee', 350)`,
    );
    await queryRunner.query(
      `INSERT INTO position (name,salary) VALUES ('Trainee', 150)`,
    );
    await queryRunner.query(
      `INSERT INTO position (name,salary) VALUES (' Leader', 380)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM month`);
  }
}
