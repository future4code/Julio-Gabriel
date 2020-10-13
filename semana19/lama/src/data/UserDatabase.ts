import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LAMA_USUÁRIOS";

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.password,
        dbModel.role
      )
    );
  }

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    try {
      const result = await super.getConnection().raw(`
        SELECT * from ${UserDatabase.TABLE_NAME} WHERE email = '${email}'
      `);
      return this.toModel(result[0][0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}