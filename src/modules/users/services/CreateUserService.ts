import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/Users';
import IUserRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async create({
    name,
    email,
    password,
    passwordRepeat,
  }: IRequest): Promise<User> {
    const findEmail = await this.usersRepository.findByEmail(email);

    if (findEmail) {
      throw new AppError('This email already exists');
    }

    if (password !== passwordRepeat) {
      throw new AppError('Passwords must be the same');
    }

    const passwordHashed = await this.hashProvider.createHash(password);

    const user = this.usersRepository.create({
      name,
      email,
      password: passwordHashed,
    });

    return user;
  }
}

export default CreateUserService;
