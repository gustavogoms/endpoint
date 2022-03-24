import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateServ1648065566448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name: "teste",
            columns: [
                {
                    name: "numserv",
                    type: "number",
                },
                {
                    name: "msg",
                    type: "varchar"
                },
                {
                    name: "dh_envio",
                    type: "date"
                },
                {
                    name: "dh_resposta",
                    type: "date"
                },
                {
                    name: "tel",
                    type: "varchar"
                }
            ],
        },);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }

}
