import { Request, Response } from "express";
import { ShowInputDTO, Show, ShowOutputDTO } from "../model/Show";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";

export class ShowController {
    private static showBusiness = new ShowBusiness(
        new ShowDatabase(),
        new IdGenerator(),
        new Authenticator()
     );

    async registerShow(req: Request, res: Response) {
        try {
            const input: ShowInputDTO = {
                week_day: req.body.week_day,
                start_time: Number(req.body.start_time),
                end_time: Number(req.body.end_time),
                band_id: req.body.band_id as string,
            }

            const token = req.headers.authorization as string

            await ShowController.showBusiness.registerShow(input, token)

            res.status(200).send({ message: "Show successfully registered"});
        } catch (error) {
            res.status(error.code || 400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getShowByWeekDay(req: Request, res: Response) {
        try {
            const week_day: string = req.body.week_day as string
            const token: string = req.headers.authorization as string

            const shows: ShowOutputDTO[] = await ShowController.showBusiness.getShowByWeekDay(week_day, token)

            res.status(200).send({ shows });
        } catch (error) {
            res.status(error.code || 400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}