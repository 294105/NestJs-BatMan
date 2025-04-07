import { Test, TestingModule } from '@nestjs/testing';
import { BatmanService } from './batman.service';

describe('BatmanService', () => {
  let service: BatmanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BatmanService],
    }).compile();

    service = module.get<BatmanService>(BatmanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
