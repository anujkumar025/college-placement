import { Module } from '@nestjs/common';
import { CollegeModule } from './college/college.module';
import { PrismaService } from './prisma.service';
import { RootController } from './root/root.controller';
import { CourseModule } from './course/course.module';
import { CollegeDataController } from './college_data/college_data.controller';
import { CollegeDataModule } from './college_data/college_data.module';
import { CollegeDataService } from './college_data/college_data.service';
import { CourseService } from './course/course.service';
import { CollegeService } from './college/college.service';
import { CollegeController } from './college/college.controller';
import { CourseController } from './course/course.controller';

@Module({
  imports: [CollegeDataModule, CollegeModule, CourseModule],
  controllers: [RootController, CollegeDataController, CollegeController, CourseController],
  providers: [PrismaService, CollegeDataService, CourseService, CollegeService],
})

export class AppModule {}
