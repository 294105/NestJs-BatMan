import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BatmanMovie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;
}
