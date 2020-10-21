import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointments';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id: provider_id } = request.user;
    const { day, month, year } = request.query;

    const listProviderAppointmentsService = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listProviderAppointmentsService.execute({
      provider_id,
      year: Number(year),
      month: Number(month),
      day: Number(day),
    });
    return response.json(classToClass(appointments));
  }
}
