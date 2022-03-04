/*
  Warnings:

  - The values [User,Admin,Business] on the enum `user_types` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `UserID` on the `Business` table. All the data in the column will be lost.
  - The `BusinessType` column on the `Business` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `BusinessID` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `CommentID` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `LocationID` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `UserID` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `BusinessID` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserReview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `BusinessID` on the `UserReview` table. All the data in the column will be lost.
  - You are about to drop the column `ReviewID` on the `UserReview` table. All the data in the column will be lost.
  - You are about to drop the column `UserID` on the `UserReview` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[BusinessID]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[locationId]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[businessId,businessName]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdAt` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reputation` to the `UserReview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserReview` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BusinessType" AS ENUM ('RESTAURANT', 'BAR', 'CAFE', 'OTHER');

-- AlterEnum
BEGIN;
CREATE TYPE "user_types_new" AS ENUM ('ADMIN', 'CUSTOMER', 'BUSINESS');
ALTER TABLE "User" ALTER COLUMN "AccountType" TYPE "user_types_new" USING ("AccountType"::text::"user_types_new");
ALTER TYPE "user_types" RENAME TO "user_types_old";
ALTER TYPE "user_types_new" RENAME TO "user_types";
DROP TYPE "user_types_old";
COMMIT;

-- AlterTable
CREATE SEQUENCE "business_businessid_seq";
ALTER TABLE "Business" DROP COLUMN "UserID",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "locationId" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "BusinessID" SET DEFAULT nextval('business_businessid_seq'),
DROP COLUMN "BusinessType",
ADD COLUMN     "BusinessType" "BusinessType";
ALTER SEQUENCE "business_businessid_seq" OWNED BY "Business"."BusinessID";

-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
DROP COLUMN "BusinessID",
DROP COLUMN "CommentID",
DROP COLUMN "LocationID",
DROP COLUMN "UserID",
ADD COLUMN     "businessId" INTEGER,
ADD COLUMN     "businessName" TEXT,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "locationId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("id");

-- AlterTable
CREATE SEQUENCE "location_locationid_seq";
ALTER TABLE "Location" DROP COLUMN "BusinessID",
ADD COLUMN     "businessId" INTEGER,
ADD COLUMN     "businessName" TEXT,
ADD COLUMN     "businessesID" INTEGER,
ADD COLUMN     "businessesName" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "LocationID" SET DEFAULT nextval('location_locationid_seq');
ALTER SEQUENCE "location_locationid_seq" OWNED BY "Location"."LocationID";

-- AlterTable
CREATE SEQUENCE "user_userid_seq";
ALTER TABLE "User" DROP COLUMN "Password",
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "UserID" SET DEFAULT nextval('user_userid_seq');
ALTER SEQUENCE "user_userid_seq" OWNED BY "User"."UserID";

-- AlterTable
ALTER TABLE "UserReview" DROP CONSTRAINT "UserReview_pkey",
DROP COLUMN "BusinessID",
DROP COLUMN "ReviewID",
DROP COLUMN "UserID",
ADD COLUMN     "businessId" INTEGER,
ADD COLUMN     "businessName" TEXT,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "reputation" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "UserReview_pkey" PRIMARY KEY ("id");

-- DropEnum
DROP TYPE "business_types";

-- CreateIndex
CREATE UNIQUE INDEX "Business_BusinessID_key" ON "Business"("BusinessID");

-- CreateIndex
CREATE UNIQUE INDEX "Business_name_key" ON "Business"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Business_locationId_key" ON "Business"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_businessId_businessName_key" ON "Location"("businessId", "businessName");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_businessId_businessName_fkey" FOREIGN KEY ("businessId", "businessName") REFERENCES "Business"("BusinessID", "name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("LocationID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_businessId_businessName_fkey" FOREIGN KEY ("businessId", "businessName") REFERENCES "Business"("BusinessID", "name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReview" ADD CONSTRAINT "UserReview_businessId_businessName_fkey" FOREIGN KEY ("businessId", "businessName") REFERENCES "Business"("BusinessID", "name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReview" ADD CONSTRAINT "UserReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;
