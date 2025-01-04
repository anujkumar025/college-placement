import { Test, TestingModule } from '@nestjs/testing';
import { CollegeDataService } from './college_data.service';

describe('CollegeDataService', () => {
  let service: CollegeDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollegeDataService],
    }).compile();

    service = module.get<CollegeDataService>(CollegeDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
