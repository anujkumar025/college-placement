import { Module } from '@nestjs/common';
import { CollegeModule } from './college/college.module';
import { PrismaService } from './prisma.service';
import { CourseModule } from './course/course.module';
import { CollegeDataModule } from './college_data/college_data.module';
import { AuthModule } from './auth/auth.module';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [CollegeDataModule, CollegeModule, CourseModule, AuthModule, CrudModule],
  controllers: [],
  providers: [PrismaService],
})

export class AppModule {}
