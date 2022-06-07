/*
  Warnings:

  - You are about to drop the column `img` on the `Design` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - Added the required column `thumbnailUrl` to the `Design` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Design" DROP CONSTRAINT "Design_copiedFromUserId_fkey";

-- AlterTable
ALTER TABLE "Design" DROP COLUMN "img",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "thumbnailUrl" TEXT NOT NULL,
ALTER COLUMN "copiedFromUserId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "userName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_copiedFromUserId_fkey" FOREIGN KEY ("copiedFromUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
