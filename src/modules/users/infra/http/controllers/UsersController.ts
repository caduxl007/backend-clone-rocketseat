import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, passwordRepeat } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.create({
      name,
      email,
      password,
      passwordRepeat,
    });

    delete user.password;

    return response.json(user);
  }
}

export default UsersController;
