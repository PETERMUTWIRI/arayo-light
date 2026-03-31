-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(500),
    "serviceQuality" INTEGER NOT NULL,
    "websiteInfo" INTEGER NOT NULL,
    "staffEfficiency" INTEGER NOT NULL,
    "responsiveness" INTEGER NOT NULL,
    "overallExperience" INTEGER NOT NULL,
    "wouldRecommend" BOOLEAN NOT NULL,
    "comment" TEXT,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Review_approved_idx" ON "Review"("approved");

-- CreateIndex
CREATE INDEX "Review_createdAt_idx" ON "Review"("createdAt");
