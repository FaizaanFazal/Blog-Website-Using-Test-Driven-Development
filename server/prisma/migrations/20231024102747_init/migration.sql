-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "verified" DROP NOT NULL,
ALTER COLUMN "verified" SET DEFAULT false;
