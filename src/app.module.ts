import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BatmanModule } from './batman/batman.module';
import { BatmanMovie } from './batman/batman.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pass@word1',   
      database: 'batman_db',
      entities: [BatmanMovie],
      synchronize: true, // set to false in production
    }),
    BatmanModule,
  ],
})
export class AppModule {}
