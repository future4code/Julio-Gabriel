import { Show, ShowInputDTO } from "../model/Show";
import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator, AuthenticationData } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";
import { UnauthorizedError } from "../error/UnauthorizedError";

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
     ){}

    async registerShow(show: ShowInputDTO, token: string) {
        if (!show.band_id || !show.week_day || !show.start_time || !show.end_time || !token) {
            throw new InvalidParameterError("Missing input");
        }

        if(show.start_time < 8 || show.start_time > 22) {
            throw new InvalidParameterError("Invalid start hours")
        }

        if(show.start_time >= show.end_time) {
            throw new InvalidParameterError("The beginning of time should be less than the closing time")
        }

        if(show.end_time < 9 || show.end_time > 23) {
            throw new InvalidParameterError("Invalid end hours")
        }

        if (show.week_day !== "SEXTA" && show.week_day !== "SÁBADO" && show.week_day!== "DOMINGO") {
            throw new InvalidParameterError("Invalid week day");
        }

        if(!Number.isInteger(show.start_time) || !Number.isInteger(show.end_time)) {
            throw new InvalidParameterError("The shows can only begin and end in whole hours")
        }

        const user: AuthenticationData = this.authenticator.getData(token)

        if(user.role !== "ADMIN") {
            throw new UnauthorizedError("You must be an admin to access this endpoint")
        }

        const showDatabase: Show[] = await this.showDatabase.getShowByWeekDayAndStartTime(
            show.week_day 
        )

        if(showDatabase) {
            for (const elementShow of showDatabase) {
                if(elementShow.getStartTime() === show.start_time) {
                    throw new InvalidParameterError("There is already a show scheduled for this day at this time")
                } else if (
                    elementShow.getEndTime() > show.start_time && 
                    elementShow.getStartTime() < show.start_time
                ){
                    throw new InvalidParameterError("There is already a show scheduled for this day at this time")
                }
            }
        }

        const id = this.idGenerator.generate();

        await this.showDatabase.registerShow(id, show.week_day, show.start_time, show.end_time, show.band_id)
    }

    async getShowByWeekDay(week_day: string, token: string) {
        if (!week_day || !token) {
            throw new InvalidParameterError("Missing input");
        }

        if (week_day !== "SEXTA" && week_day !== "SÁBADO" && week_day!== "DOMINGO") {
            throw new InvalidParameterError("Invalid week day");
        }
    
        const showFromDB = await this.showDatabase.getShowByWeekDay(week_day);

        if (!showFromDB) {
            throw new NotFoundError("Show(s) not found");
        }

        return showFromDB;
    }
}