import { container } from 'tsyringe';

import '@modules/users/providers';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUserRepository from '@modules/users/repositories/IUsersRepository';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);
