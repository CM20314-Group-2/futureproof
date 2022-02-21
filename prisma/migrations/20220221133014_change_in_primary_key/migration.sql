/*
  Warnings:

  - The primary key for the `Business` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `businessName` on the `Comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[businessId]` on the table `Location` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_businessId_businessName_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_businessId_businessName_fkey";

-- DropForeignKey
ALTER TABLE "UserReview" DROP CONSTRAINT "UserReview_businessId_businessName_fkey";

-- DropIndex
DROP INDEX "Location_businessId_businessName_key";

-- AlterTable
ALTER TABLE "Business" DROP CONSTRAINT "Business_pkey",
ADD CONSTRAINT "Business_pkey" PRIMARY KEY ("BusinessID");

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "businessName";

-- CreateIndex
CREATE UNIQUE INDEX "Comment_id_key" ON "Comment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Location_businessId_key" ON "Location"("businessId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("BusinessID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("BusinessID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReview" ADD CONSTRAINT "UserReview_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("BusinessID") ON DELETE SET NULL ON UPDATE CASCADE;
