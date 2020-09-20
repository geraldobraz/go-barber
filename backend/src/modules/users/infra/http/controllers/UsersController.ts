import CreateUserService from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ name, email, password });

    return response.json(user);
  }
}
