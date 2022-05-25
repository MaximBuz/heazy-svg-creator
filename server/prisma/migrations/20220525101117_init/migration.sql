/*
  Warnings:

  - You are about to alter the column `seed` on the `BubbleOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `solid` on the `BubbleOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `strokeWidth` on the `BubbleOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `solid` on the `CornerOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `strokeWidth` on the `CornerOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `velocity` on the `CornerOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `breaks` on the `CornerOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `stacks` on the `CornerOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `distance` on the `CornerOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `strokeWidth` on the `MarkerOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `markerHeight` on the `MarkerOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `zickZacks` on the `MarkerOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `seed` on the `WaveOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `solid` on the `WaveOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `strokeWidth` on the `WaveOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `breaks` on the `WaveOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `stacks` on the `WaveOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `distance` on the `WaveOptions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "BubbleOptions" ALTER COLUMN "seed" SET DATA TYPE INTEGER,
ALTER COLUMN "solid" SET DATA TYPE INTEGER,
ALTER COLUMN "strokeWidth" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CornerOptions" ALTER COLUMN "solid" SET DATA TYPE INTEGER,
ALTER COLUMN "strokeWidth" SET DATA TYPE INTEGER,
ALTER COLUMN "velocity" SET DATA TYPE INTEGER,
ALTER COLUMN "breaks" SET DATA TYPE INTEGER,
ALTER COLUMN "stacks" SET DATA TYPE INTEGER,
ALTER COLUMN "distance" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "MarkerOptions" ALTER COLUMN "strokeWidth" SET DATA TYPE INTEGER,
ALTER COLUMN "markerHeight" SET DATA TYPE INTEGER,
ALTER COLUMN "zickZacks" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "WaveOptions" ALTER COLUMN "seed" SET DATA TYPE INTEGER,
ALTER COLUMN "solid" SET DATA TYPE INTEGER,
ALTER COLUMN "strokeWidth" SET DATA TYPE INTEGER,
ALTER COLUMN "breaks" SET DATA TYPE INTEGER,
ALTER COLUMN "stacks" SET DATA TYPE INTEGER,
ALTER COLUMN "distance" SET DATA TYPE INTEGER;
