/*
  Warnings:

  - You are about to drop the column `average_placement` on the `College_Placement` table. All the data in the column will be lost.
  - You are about to drop the column `highest_placement` on the `College_Placement` table. All the data in the column will be lost.
  - You are about to drop the column `median_placement` on the `College_Placement` table. All the data in the column will be lost.
  - You are about to drop the column `placement_rate` on the `College_Placement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[college_id,year]` on the table `College_Placement` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "College_Placement" DROP COLUMN "average_placement",
DROP COLUMN "highest_placement",
DROP COLUMN "median_placement",
DROP COLUMN "placement_rate";

-- CreateTable
CREATE TABLE "CalcStats" (
    "id" SERIAL NOT NULL,
    "college_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "highest_placement" INTEGER NOT NULL,
    "average_placement" INTEGER NOT NULL,
    "median_placement" INTEGER NOT NULL,
    "placement_rate" INTEGER NOT NULL,

    CONSTRAINT "CalcStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CalcStats_college_id_year_idx" ON "CalcStats"("college_id", "year");

-- CreateIndex
CREATE UNIQUE INDEX "College_Placement_college_id_year_key" ON "College_Placement"("college_id", "year");

-- AddForeignKey
ALTER TABLE "CalcStats" ADD CONSTRAINT "CalcStats_college_id_year_fkey" FOREIGN KEY ("college_id", "year") REFERENCES "College_Placement"("college_id", "year") ON DELETE RESTRICT ON UPDATE CASCADE;
