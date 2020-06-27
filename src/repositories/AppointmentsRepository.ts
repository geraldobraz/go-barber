import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentRepository {
  private _appointments: Appointment[];

  constructor() {
    this._appointments = [];
  }

  /**
   *
   *
   * @returns {Appointment[]}
   * @memberof AppointmentRepository
   */
  public all(): Appointment[] {
    return this._appointments;
  }

  /**
   * Create Appointment
   * @param {string} provider
   * @param {Date} date
   * @returns {Appointment}
   * @memberof AppointmentRepository
   */
  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this._appointments.push(appointment);

    return appointment;
  }

  /**
   * FindByDate
   *
   * @param {Date} date
   * @returns {(Appointment | null)}
   * @memberof AppointmentRepository
   */
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this._appointments.find((ap: Appointment) =>
      isEqual(date, ap.date),
    );

    return findAppointment || null;
  }
}
export default AppointmentRepository;
