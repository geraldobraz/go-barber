import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { providerId, date } = request.body;
    const parsedDate: Date = parseISO(date);

    const createAppointmentService = container.resolve(
      CreateAppointmentService,
    );

    const appointment = await createAppointmentService.execute({
      providerId,
      date: parsedDate,
    });
    return response.json(appointment);
  }
}
