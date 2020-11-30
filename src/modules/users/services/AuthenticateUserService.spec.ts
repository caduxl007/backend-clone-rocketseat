import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to user authenticate', async () => {
    await createUser.create({
      name: 'Eduardo',
      email: 'eduardo@gmail.com',
      password: '123456',
      passwordRepeat: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'eduardo@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });

  it('should not be able to accept an invalid email', async () => {
    await createUser.create({
      name: 'Eduardo',
      email: 'eduardo@gmail.com',
      password: '123456',
      passwordRepeat: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'eduardo2@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to accept an incorrect password', async () => {
    await createUser.create({
      name: 'Eduardo',
      email: 'eduardo@gmail.com',
      password: '123456',
      passwordRepeat: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'eduardo@gmail.com',
        password: '1234567',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
