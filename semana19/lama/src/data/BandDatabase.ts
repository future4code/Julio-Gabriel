import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
  private static TABLE_NAME = "LAMA_BANDAS";

  public async registerBand(
    id: string,
    name: string,
    music_genre: string,
    responsible: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          music_genre,
          responsible
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandById(id: string): Promise<Band | undefined> {
    try {
      const result = await super.getConnection().raw(`
        SELECT * from ${BandDatabase.TABLE_NAME} 
        WHERE id = '${id}'
      `);
      return Band.toUserModel(result[0][0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getBandByName(name: string): Promise<Band | undefined> {
    try {
      const result = await super.getConnection().raw(`
        SELECT * from ${BandDatabase.TABLE_NAME} 
        WHERE name = "${name}"
      `);
      return Band.toUserModel(result[0][0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}