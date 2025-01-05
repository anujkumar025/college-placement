import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CrudService } from './crud.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { DeleteCourseDto } from './dto/delete-course.dto';
import { GetCourseDto } from './dto/get-course.dto';

@ApiTags('CRUD Operations')
@Controller('crud')
export class CrudController {
  constructor(private crudService: CrudService) {}

  @ApiOperation({ summary: 'Add a course' })
  @ApiResponse({ status: 201, description: 'Course added successfully' })
  @Post('addcourse')
  async create(@Body() input: CreateCourseDto) {
    return this.crudService.createEntry(input);
  }

  @ApiOperation({ summary: 'Update a course' })
  @ApiResponse({ status: 200, description: 'Course updated successfully' })
  @Put('updatecourse')
  async update(@Body() input: UpdateCourseDto) {
    return this.crudService.updateEntry(input);
  }

  @ApiOperation({ summary: 'Delete a course' })
  @ApiResponse({ status: 200, description: 'Course deleted successfully' })
  @Delete('deletecourse')
  async delete(@Body() input: DeleteCourseDto) {
    return this.crudService.deleteEntry(input);
  }

  @ApiOperation({ summary: 'Get a course' })
  @ApiResponse({ status: 200, description: 'Course retrieved successfully' })
  @Get('getcourse')
  async get(@Body() input: GetCourseDto) {
    return this.crudService.getEntry(input);
  }
}
