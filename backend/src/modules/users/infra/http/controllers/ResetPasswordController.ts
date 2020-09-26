import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RestPasswordService from '@modules/users/services/RestPasswordService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = container.resolve(RestPasswordService);

    await resetPassword.execute({ password, token });

    return response.status(204).json();
  }
}
