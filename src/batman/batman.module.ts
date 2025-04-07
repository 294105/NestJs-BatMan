import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BatmanService } from './batman.service';
import { BatmanController } from './batman.controller';
import { BatmanMovie } from './batman.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BatmanMovie])],
  controllers: [BatmanController],
  providers: [BatmanService],
})
export class BatmanModule {}
