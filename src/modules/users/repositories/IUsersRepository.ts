import ICreateUserDTO from '../dtos/ICreateUserDto';
import User from '../infra/typeorm/entities/Users';

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
