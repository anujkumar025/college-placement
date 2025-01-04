import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';

@Injectable()
export class CollegePlacementService {
  constructor(private prisma: PrismaService) {}

  async getCollegePlacementData(collegeId: number): Promise<any> {
    
  }
}

