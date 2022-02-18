/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[creatorId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
ADD COLUMN     "creatorId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_creatorId_key" ON "User"("creatorId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
