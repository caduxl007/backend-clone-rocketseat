export default interface IHashProvider {
  createHash(password: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
