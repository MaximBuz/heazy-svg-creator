/*
  Warnings:

  - Added the required column `designTypeId` to the `Design` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Design" ADD COLUMN     "designTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "DesignType" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "DesignType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_designTypeId_fkey" FOREIGN KEY ("designTypeId") REFERENCES "DesignType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
