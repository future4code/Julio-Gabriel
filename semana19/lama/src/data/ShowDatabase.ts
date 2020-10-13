import { BaseDatabase } from "./BaseDatabase";
import { Show, ShowOutputDTO } from "../model/Show";

export class ShowDatabase extends BaseDatabase {
  private static TABLE_NAME = "LAMA_SHOWS";

  public async registerShow(
    id: string,
    week_day: string,
    start_time: Number,
    end_time: Number,
    band_id: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          week_day,
          start_time,
          end_time,
          band_id,
        })
        .into(ShowDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getShowByWeekDay(week_day: string): Promise<ShowOutputDTO[] | undefined> {
    try {
      const result = await super.getConnection().raw(`
        SELECT LB.name, LB.music_genre 
        FROM LAMA_BANDAS LB
        JOIN LAMA_SHOWS LS
        ON LB.id = LS.band_id
        WHERE week_day = "${week_day}"
        ORDER BY start_time ASC;
      `);

      const data: any[] = result[0]

      let shows: ShowOutputDTO[] = []

      data.map((show: any) => {
        const showOutput: ShowOutputDTO = {
          name: show.name,
          music_genre: show.music_genre
        }
        shows.push(showOutput)
      })

      return shows;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getShowByWeekDayAndStartTime(week_day: string): Promise<Show[]> {
      try {
        const result = await super.getConnection().raw(`
            SELECT * FROM ${ShowDatabase.TABLE_NAME}
            WHERE week_day = "${week_day}"
        `)

        const data: any[] = result[0]

        let shows: Show[] = []

        data.map((show: any) => {
          const newShow: Show = Show.toUserModel(show)
          shows.push(newShow)
        })

        return shows
      } catch (error){
          throw new Error(error.sqlMessage || error.message)
      }
  }
}