import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      providerId: '1342342143',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1342342143');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date();

    await createAppointment.execute({
      date: appointmentDate,
      providerId: '1342342143',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        providerId: '1342342143',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
