import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

describe('ShowProfile', () => {
  let fakeUsersRepository: FakeUsersRepository;
  let showProfile: ShowProfileService;

  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john.doe@email.com',
      password: '123456',
    });

    const profile = await showProfile.execute({ user_id: user.id });

    expect(profile.name).toBe('John Doe');
    expect(profile.email).toBe('john.doe@email.com');
  });

  it('should be able to update the profile', async () => {
    await expect(
      showProfile.execute({ user_id: 'non-existing-user-id' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
