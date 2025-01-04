import { Module } from '@nestjs/common';
import { CollegeModule } from './college/college.module';
import { PrismaService } from './prisma.service';
import { RootController } from './root/root.controller';
import { CourseModule } from './course/course.module';
import { CollegeDataModule } from './college_data/college_data.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [CollegeDataModule, CollegeModule, CourseModule, AuthModule, UsersModule, CrudModule],
  controllers: [RootController],
  providers: [PrismaService],
})

export class AppModule {}
