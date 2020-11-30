import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async createHash(password: string): Promise<string> {
    return password;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export default FakeHashProvider;
