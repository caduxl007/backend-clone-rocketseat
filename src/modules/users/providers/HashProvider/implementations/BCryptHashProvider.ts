import { hash, compare } from 'bcryptjs';

import IHashProvider from '../models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async createHash(password: string): Promise<string> {
    return hash(password, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BCryptHashProvider;
