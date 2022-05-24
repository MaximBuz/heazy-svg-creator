-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Design" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "bubbleOptionsId" INTEGER,
    "waveOptionsId" INTEGER,
    "cornerOptionsId" INTEGER,
    "markerOptionsId" INTEGER,

    CONSTRAINT "Design_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BubbleOptions" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "seed" INTEGER NOT NULL,
    "stroke" BOOLEAN NOT NULL,
    "solid" INTEGER NOT NULL,
    "strokeWidth" INTEGER NOT NULL,
    "velocity" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "startColor" TEXT NOT NULL,
    "endColor" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "shadowX" TEXT NOT NULL,
    "shadowY" TEXT NOT NULL,
    "shadowSD" INTEGER NOT NULL,
    "shadowColor" TEXT NOT NULL,

    CONSTRAINT "BubbleOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaveOptions" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "seed" INTEGER NOT NULL,
    "stroke" BOOLEAN NOT NULL,
    "solid" INTEGER NOT NULL,
    "strokeWidth" INTEGER NOT NULL,
    "strokeShrink" BOOLEAN NOT NULL,
    "balance" INTEGER NOT NULL,
    "velocity" INTEGER NOT NULL,
    "breaks" INTEGER NOT NULL,
    "stacks" INTEGER NOT NULL,
    "distance" INTEGER NOT NULL,
    "smooth" INTEGER NOT NULL,
    "startColor" TEXT NOT NULL,
    "endColor" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "shadowX" TEXT NOT NULL,
    "shadowY" TEXT NOT NULL,
    "shadowSD" INTEGER NOT NULL,
    "shadowColor" TEXT NOT NULL,

    CONSTRAINT "WaveOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CornerOptions" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "seed" INTEGER NOT NULL,
    "stroke" BOOLEAN NOT NULL,
    "solid" INTEGER NOT NULL,
    "strokeWidth" INTEGER NOT NULL,
    "strokeShrink" BOOLEAN NOT NULL,
    "balance" INTEGER NOT NULL,
    "velocity" INTEGER NOT NULL,
    "breaks" INTEGER NOT NULL,
    "stacks" INTEGER NOT NULL,
    "distance" INTEGER NOT NULL,
    "smooth" INTEGER NOT NULL,
    "topLeftCorner" BOOLEAN NOT NULL,
    "topRightCorner" BOOLEAN NOT NULL,
    "bottomLeftCorner" BOOLEAN NOT NULL,
    "bottomRightCorner" BOOLEAN NOT NULL,
    "mirror" BOOLEAN NOT NULL,
    "startColor" TEXT NOT NULL,
    "endColor" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "shadowX" TEXT NOT NULL,
    "shadowY" TEXT NOT NULL,
    "shadowSD" INTEGER NOT NULL,
    "shadowColor" TEXT NOT NULL,

    CONSTRAINT "CornerOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarkerOptions" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "seed" INTEGER NOT NULL,
    "lineCap" TEXT NOT NULL,
    "lineJoin" TEXT NOT NULL,
    "strokeWidth" INTEGER NOT NULL,
    "markerHeight" INTEGER NOT NULL,
    "zickZacks" INTEGER NOT NULL,
    "pressure" INTEGER NOT NULL,
    "padding" INTEGER NOT NULL,
    "mirror" BOOLEAN NOT NULL,
    "yPosition" INTEGER NOT NULL,
    "ghost" BOOLEAN NOT NULL,
    "ghostSize" INTEGER NOT NULL,
    "ghostStartColor" TEXT NOT NULL,
    "ghostEndColor" TEXT NOT NULL,
    "startColor" TEXT NOT NULL,
    "endColor" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "shadowX" TEXT NOT NULL,
    "shadowY" TEXT NOT NULL,
    "shadowSD" INTEGER NOT NULL,
    "shadowColor" TEXT NOT NULL,

    CONSTRAINT "MarkerOptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_bubbleOptionsId_fkey" FOREIGN KEY ("bubbleOptionsId") REFERENCES "BubbleOptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_waveOptionsId_fkey" FOREIGN KEY ("waveOptionsId") REFERENCES "WaveOptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_cornerOptionsId_fkey" FOREIGN KEY ("cornerOptionsId") REFERENCES "CornerOptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_markerOptionsId_fkey" FOREIGN KEY ("markerOptionsId") REFERENCES "MarkerOptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BubbleOptions" ADD CONSTRAINT "BubbleOptions_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaveOptions" ADD CONSTRAINT "WaveOptions_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CornerOptions" ADD CONSTRAINT "CornerOptions_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerOptions" ADD CONSTRAINT "MarkerOptions_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
