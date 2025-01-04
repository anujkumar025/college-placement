import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CrudService {
    constructor (private prisma: PrismaService) {}

    async createEntry(input: {collegeName: string, courseName: string, courseDuration: number, courseFee: number}) {
        const findCollegeId = await this.prisma.college.findFirst({
            where: {
                name: input.collegeName,
            },
        })

        if (!findCollegeId) {
            return {message: 'College not found'};
        }

        await this.prisma.college_Wise_Course.create({
            data: {
                college_id: findCollegeId.id,
                course_name: input.courseName,
                course_duration: input.courseDuration,
                course_fee: input.courseFee,
            },
        });

        return "Entry created successfully";
    }

    async updateEntry(input: {collegeName: string, courseName: string, courseDuration: number, courseFee: number}) {
        const findCollegeId = await this.prisma.college.findFirst({
            where: {
                name: input.collegeName,
            },
        })

        if (!findCollegeId) {
            return {message: 'College not found'};
        }

        const findCourseId = await this.prisma.college_Wise_Course.findFirst({
            where: {
                college_id: findCollegeId.id,
                course_name: input.courseName,
            },
        })

        if (!findCourseId) {
            return {message: 'Course not found'};
        }

        await this.prisma.college_Wise_Course.update({
            where: {
                id: findCourseId.id,
            },
            data: {
                course_duration: input.courseDuration,
                course_fee: input.courseFee,
            },
        });

        return "Entry updated successfully";
    }

    async deleteEntry(input: {collegeName: string, courseName: string}) {
        const findCollegeId = await this.prisma.college.findFirst({
            where: {
                name: input.collegeName,
            },
        })

        if (!findCollegeId) {
            return {message: 'College not found'};
        }

        const findCourseId = await this.prisma.college_Wise_Course.findFirst({
            where: {
                college_id: findCollegeId.id,
                course_name: input.courseName,
            },
        })

        if (!findCourseId) {
            return {message: 'Course not found'};
        }

        await this.prisma.college_Wise_Course.delete({
            where: {
                id: findCourseId.id,
            },
        });

        return "Entry deleted successfully";
    }

    async getEntry(input: {collegeName: string}) {
        const findCollegeId = await this.prisma.college.findFirst({
            where: {
                name: input.collegeName,
            },
        })

        if (!findCollegeId) {
            return {message: 'College not found'};
        }

        const findCourses = await this.prisma.college_Wise_Course.findMany({
            where: {
                college_id: findCollegeId.id,
            },
        });

        return findCourses;
    }
}
