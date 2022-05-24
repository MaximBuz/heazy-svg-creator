-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BubbleOptions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "seed" INTEGER NOT NULL,
    "stroke" BOOLEAN NOT NULL,
    "solid" INTEGER NOT NULL,
    "strokeWidth" INTEGER NOT NULL,
    "velocity" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "startColor" TEXT NOT NULL,
    "endColor" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "shadowX" INTEGER NOT NULL,
    "shadowY" INTEGER NOT NULL,
    "shadowSD" INTEGER NOT NULL,
    "shadowColor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BubbleOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaveOptions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
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
    "shadowX" INTEGER NOT NULL,
    "shadowY" INTEGER NOT NULL,
    "shadowSD" INTEGER NOT NULL,
    "shadowColor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "WaveOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CornerOptions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
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
    "shadowX" INTEGER NOT NULL,
    "shadowY" INTEGER NOT NULL,
    "shadowSD" INTEGER NOT NULL,
    "shadowColor" TEXT NOT NULL,
    "designId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CornerOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarkerOptions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
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
    "shadowX" INTEGER NOT NULL,
    "shadowY" INTEGER NOT NULL,
    "shadowSD" INTEGER NOT NULL,
    "shadowColor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "MarkerOptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "BubbleOptions" ADD CONSTRAINT "BubbleOptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaveOptions" ADD CONSTRAINT "WaveOptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CornerOptions" ADD CONSTRAINT "CornerOptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerOptions" ADD CONSTRAINT "MarkerOptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
