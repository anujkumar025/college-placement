import { Module } from '@nestjs/common';
import { CollegeService } from './college/college.service';
import { CollegePlacementService } from './college-placement/college-placement.service';
import { CollegeModule } from './college/college.module';
import { PrismaService } from './prisma.service';
import { RootController } from './root/root.controller';

@Module({
  imports: [CollegeModule],
  controllers: [RootController],
  providers: [CollegeService, CollegePlacementService, PrismaService],
})

export class AppModule {}
