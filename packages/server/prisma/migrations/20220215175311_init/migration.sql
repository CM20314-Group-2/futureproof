-- CreateEnum
CREATE TYPE "business_types" AS ENUM ('Restuarant', 'Cafe', 'Bar', 'Other', 'Retail', 'Supermarket', 'Health and Beauty');

-- CreateEnum
CREATE TYPE "user_types" AS ENUM ('User', 'Admin', 'Business');

-- CreateTable
CREATE TABLE "Business" (
    "BusinessID" INTEGER NOT NULL,
    "UserID" INTEGER,
    "name" TEXT NOT NULL,
    "FutureproofRating" DOUBLE PRECISION NOT NULL,
    "UserRating" DOUBLE PRECISION NOT NULL,
    "ProfileText" TEXT,
    "ProfilePicture" BYTEA,
    "BusinessType" "business_types",

    CONSTRAINT "Business_pkey" PRIMARY KEY ("BusinessID","name")
);

-- CreateTable
CREATE TABLE "Comment" (
    "CommentID" INTEGER NOT NULL,
    "BusinessID" INTEGER NOT NULL,
    "LocationID" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,
    "CommentText" TEXT NOT NULL,
    "DateCreated" DATE NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("CommentID")
);

-- CreateTable
CREATE TABLE "Location" (
    "LocationID" INTEGER NOT NULL,
    "BusinessID" INTEGER NOT NULL,
    "Location" TEXT NOT NULL,
    "Longitude" INTEGER,
    "Latitude" INTEGER,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("LocationID")
);

-- CreateTable
CREATE TABLE "User" (
    "UserID" INTEGER NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "ProfilePic" BYTEA,
    "AccountType" "user_types",

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "UserReview" (
    "ReviewID" INTEGER NOT NULL,
    "BusinessID" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,
    "DateCreated" DATE NOT NULL,
    "ReviewData" TEXT NOT NULL,

    CONSTRAINT "UserReview_pkey" PRIMARY KEY ("ReviewID")
);
