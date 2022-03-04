/*
  Warnings:

  - You are about to drop the column `businessesID` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `businessesName` on the `Location` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "businessesID",
DROP COLUMN "businessesName";
