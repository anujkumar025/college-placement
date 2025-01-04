/*
  Warnings:

  - You are about to drop the `CalcStats` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `average_placement` to the `College_Placement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highest_placement` to the `College_Placement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `median_placement` to the `College_Placement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placement_rate` to the `College_Placement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CalcStats" DROP CONSTRAINT "CalcStats_college_id_year_fkey";

-- DropIndex
DROP INDEX "College_Placement_college_id_year_key";

-- AlterTable
ALTER TABLE "College_Placement" ADD COLUMN     "average_placement" INTEGER NOT NULL,
ADD COLUMN     "highest_placement" INTEGER NOT NULL,
ADD COLUMN     "median_placement" INTEGER NOT NULL,
ADD COLUMN     "placement_rate" INTEGER NOT NULL;

-- DropTable
DROP TABLE "CalcStats";
