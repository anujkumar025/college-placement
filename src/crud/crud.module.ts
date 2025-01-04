import { Module } from '@nestjs/common';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CrudController],
  providers: [CrudService, PrismaService]
})
export class CrudModule {}
