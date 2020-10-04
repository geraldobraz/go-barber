import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailability';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { providerId } = request.params;
    const { year, month, day } = request.body;

    const listProviderDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const availability = await listProviderDayAvailability.execute({
      providerId,
      year,
      month,
      day,
    });

    return response.json(availability);
  }
}
