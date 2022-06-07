/*
  Warnings:

  - You are about to drop the `BubbleOptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CornerOptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MarkerOptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WaveOptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BubbleOptions" DROP CONSTRAINT "BubbleOptions_userId_fkey";

-- DropForeignKey
ALTER TABLE "CornerOptions" DROP CONSTRAINT "CornerOptions_userId_fkey";

-- DropForeignKey
ALTER TABLE "MarkerOptions" DROP CONSTRAINT "MarkerOptions_userId_fkey";

-- DropForeignKey
ALTER TABLE "WaveOptions" DROP CONSTRAINT "WaveOptions_userId_fkey";

-- DropTable
DROP TABLE "BubbleOptions";

-- DropTable
DROP TABLE "CornerOptions";

-- DropTable
DROP TABLE "MarkerOptions";

-- DropTable
DROP TABLE "WaveOptions";

-- CreateTable
CREATE TABLE "Design" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "timesCopied" INTEGER NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "copiedFromUserId" INTEGER NOT NULL,

    CONSTRAINT "Design_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_copiedFromUserId_fkey" FOREIGN KEY ("copiedFromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
