/*
  Warnings:

  - Added the required column `name` to the `DesignType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DesignType" ADD COLUMN     "name" TEXT NOT NULL;
