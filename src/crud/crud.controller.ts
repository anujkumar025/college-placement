import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
    constructor(private crudService: CrudService) {}

    @Post('addcourse')
    async create(@Body() input: {collegeName: string, courseName: string, courseDuration: number, courseFee: number}) {
        return this.crudService.createEntry(input);
    }

    @Put('updatecourse')
    async update(@Body() input: {collegeName: string, courseName: string, courseDuration: number, courseFee: number}) {
        return this.crudService.updateEntry(input);
    }

    @Delete('deletecourse')
    async delete(@Body() input: {collegeName: string, courseName: string}) {
        return this.crudService.deleteEntry(input);
    }

    @Get('getcourse')
    async get(@Body() input: {collegeName: string}) {
        return this.crudService.getEntry(input);
    }
}
