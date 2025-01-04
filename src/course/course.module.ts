import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { PrismaService } from './../prisma.service';  // Prisma service to access DB

@Module({
  controllers: [CourseController],
  providers: [CourseService, PrismaService],  // Include Prisma service
})
export class CourseModule {}
