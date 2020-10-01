import ShowProfileService from '@modules/users/services/ShowProfileService';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ProfileController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const { name, email, password, oldPassword } = request.body;

    const updateProfileService = container.resolve(UpdateProfileService);

    const user = await updateProfileService.execute({
      userId,
      name,
      email,
      password,
      oldPassword,
    });

    delete user.password;

    return response.json(user);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({ userId });

    delete user.password;
    return response.json(user);
  }
}
