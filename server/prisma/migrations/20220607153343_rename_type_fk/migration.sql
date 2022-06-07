/*
  Warnings:

  - You are about to drop the column `designTypeId` on the `Design` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Design` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Design" DROP CONSTRAINT "Design_designTypeId_fkey";

-- AlterTable
ALTER TABLE "Design" DROP COLUMN "designTypeId",
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "DesignType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
