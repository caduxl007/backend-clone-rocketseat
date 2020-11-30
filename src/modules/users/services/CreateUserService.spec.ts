import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('UsersRepository', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('shoud be able to create user', async () => {
    const user = await createUser.create({
      name: 'Eduardo Silva',
      email: 'eduardo@gmail.com',
      password: '123456',
      passwordRepeat: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.email).toBe('eduardo@gmail.com');
  });

  it('should not be able to create user with same email', async () => {
    await createUser.create({
      name: 'Eduardo Silva',
      email: 'eduardo@gmail.com',
      password: '123456',
      passwordRepeat: '123456',
    });

    await expect(
      createUser.create({
        name: 'Eduardo Silva',
        email: 'eduardo@gmail.com',
        password: '123456',
        passwordRepeat: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
