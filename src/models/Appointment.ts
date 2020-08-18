import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  provider: string;

  @Column('time with time zone')
  date: Date;
}

export default Appointment;
