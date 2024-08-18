import { MigrationInterface, QueryRunner } from "typeorm";

export class PartnerCreate1723998273764 implements MigrationInterface {
    name = 'PartnerCreate1723998273764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "partner" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "email" character varying NOT NULL, "fullName" character varying NOT NULL, "passwordHash" character varying NOT NULL, "phone" character varying, "referenceCode" character varying NOT NULL, "metadata" jsonb, CONSTRAINT "PK_8f34ff11ddd5459eacbfacd48ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partnership_package" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "description" character varying NOT NULL, "amount" integer NOT NULL, "day" integer NOT NULL, "isVisible" boolean NOT NULL, "metadata" jsonb, CONSTRAINT "PK_ba2240584bec55ed1269a863cb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partner_subscription" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "startAt" TIMESTAMP WITH TIME ZONE NOT NULL, "endAt" TIMESTAMP WITH TIME ZONE NOT NULL, "metadata" jsonb, "nameId" character varying, "partnershipPackageId" character varying, CONSTRAINT "PK_c5388b3d9eae50513556ffe77c3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partner_subscription_payment" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "dueDate" TIMESTAMP WITH TIME ZONE NOT NULL, "amount" integer NOT NULL, "channel" character varying NOT NULL, "paidAt" character varying NOT NULL, "status" character varying NOT NULL, "metadata" jsonb, "nameId" character varying, CONSTRAINT "PK_290ac3d0d7b3b35f5a31390935b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "partner_subscription" ADD CONSTRAINT "FK_61c394cb7e7ec7ef4dd450f489b" FOREIGN KEY ("nameId") REFERENCES "partner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partner_subscription" ADD CONSTRAINT "FK_74134aa89827abf607c60a47901" FOREIGN KEY ("partnershipPackageId") REFERENCES "partnership_package"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partner_subscription_payment" ADD CONSTRAINT "FK_beb6bea427391e7c56d6d89a018" FOREIGN KEY ("nameId") REFERENCES "partner_subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partner_subscription_payment" DROP CONSTRAINT "FK_beb6bea427391e7c56d6d89a018"`);
        await queryRunner.query(`ALTER TABLE "partner_subscription" DROP CONSTRAINT "FK_74134aa89827abf607c60a47901"`);
        await queryRunner.query(`ALTER TABLE "partner_subscription" DROP CONSTRAINT "FK_61c394cb7e7ec7ef4dd450f489b"`);
        await queryRunner.query(`DROP TABLE "partner_subscription_payment"`);
        await queryRunner.query(`DROP TABLE "partner_subscription"`);
        await queryRunner.query(`DROP TABLE "partnership_package"`);
        await queryRunner.query(`DROP TABLE "partner"`);
    }

}
