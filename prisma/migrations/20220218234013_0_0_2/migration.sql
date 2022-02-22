-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_creatorId_fkey";

-- DropIndex
DROP INDEX "User_creatorId_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "creatorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
