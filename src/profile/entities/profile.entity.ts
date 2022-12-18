/* eslint-disable prettier/prettier */
import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';

@Entity()
export class ProfileTesting123 {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  userName: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: number;

  @Column()
  is_active: boolean;
}
