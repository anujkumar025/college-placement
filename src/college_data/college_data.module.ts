import { Module } from '@nestjs/common';
import { CollegeDataController } from './college_data.controller'; 
import { CollegeDataService } from './college_data.service';
import { PrismaService } from './../prisma.service';

@Module({
  controllers: [CollegeDataController],
  providers: [CollegeDataService, PrismaService],
})

export class CollegeDataModule {}