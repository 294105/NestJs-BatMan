import { Test, TestingModule } from '@nestjs/testing';
import { BatmanController } from './batman.controller';

describe('BatmanController', () => {
  let controller: BatmanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatmanController],
    }).compile();

    controller = module.get<BatmanController>(BatmanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
