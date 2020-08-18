import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment> {
  /**
   * FindByDate
   *
   * @param {Date} date
   * @returns {(Appointment | null)}
   * @memberof AppointmentRepository
   */
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}
export default AppointmentRepository;
