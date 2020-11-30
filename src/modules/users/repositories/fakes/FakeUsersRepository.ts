import { uuid } from 'uuidv4';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDto';
import User from '@modules/users/infra/typeorm/entities/Users';
import IUserRepository from '../IUsersRepository';

class FakeUsersRepository implements IUserRepository {
  private users: User[] = [];

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid(), name, email, password });

    this.users.push(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUserByEmail = this.users.find(user => user.email === email);

    return findUserByEmail;
  }
}

export default FakeUsersRepository;
