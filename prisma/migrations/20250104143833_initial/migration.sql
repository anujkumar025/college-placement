-- CreateTable
CREATE TABLE "College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "city_id" INTEGER NOT NULL,
    "state_id" INTEGER NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College_Placement" (
    "id" SERIAL NOT NULL,
    "college_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "highest_placement" INTEGER NOT NULL,
    "average_placement" INTEGER NOT NULL,
    "median_placement" INTEGER NOT NULL,
    "placement_rate" INTEGER NOT NULL,

    CONSTRAINT "College_Placement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College_Wise_Course" (
    "id" SERIAL NOT NULL,
    "college_id" INTEGER NOT NULL,
    "course_name" TEXT NOT NULL,
    "course_duration" INTEGER NOT NULL,
    "course_fee" INTEGER NOT NULL,

    CONSTRAINT "College_Wise_Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state_id" INTEGER NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "States" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "States_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "College_score_idx" ON "College"("score");

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "Cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "States"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "College_Placement" ADD CONSTRAINT "College_Placement_college_id_fkey" FOREIGN KEY ("college_id") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "College_Wise_Course" ADD CONSTRAINT "College_Wise_Course_college_id_fkey" FOREIGN KEY ("college_id") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cities" ADD CONSTRAINT "Cities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "States"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
