import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TableData {
  @PrimaryGeneratedColumn('uuid')
  table_id: string;

  @Column()
  isActive: boolean;

  @Column()
  numberUsertable: number;

  @Column()
  price: number;

  @Column()
  totalPrice: number;
}
