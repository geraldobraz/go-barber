import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  userId: string;
  name: string;
  email: string;
  oldPassword?: string;
  password?: string;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    userId,
    name,
    email,
    password,
    oldPassword,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found');
    }

    const userWithUpdatedEmail = await this.usersRepository.findByEmail(email);

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('E-mail already in use');
    }
    user.name = name;
    user.email = email;

    if (password) {
      if (!oldPassword) {
        throw new AppError(
          'You need to inform the old password to set a new password.',
        );
      } else {
        const checkOldPassword = await this.hashProvider.compareHash(
          oldPassword,
          user.password,
        );

        if (!checkOldPassword) {
          throw new AppError('Old password does not match.');
        }

        user.password = await this.hashProvider.generateHash(password);
      }
    }

    return this.usersRepository.save(user);
  }
}

export default UpdateProfileService;
