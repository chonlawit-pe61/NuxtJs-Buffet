import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TableBuffetSucess {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Table: number;

  @Column()
  NumberUser: number;

  @Column()
  Price: number;

  @Column()
  TotalPrice: number;

  @CreateDateColumn()
  Date: number;
}
