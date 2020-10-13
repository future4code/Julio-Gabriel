import { Request, Response } from "express";
import { BandInputDTO, Band } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";

export class BandController {
    private static bandBusiness = new BandBusiness(
        new BandDatabase(),
        new IdGenerator(),
        new Authenticator()
     );

    async registerBand(req: Request, res: Response) {
        try {
            const input: BandInputDTO = {
                name: req.body.name as string,
                music_genre: req.body.music_genre as string,
                responsible: req.body.responsible as string
            }

            const token = req.headers.authorization as string

            await BandController.bandBusiness.registerBand(input, token)

            res.status(200).send({ message: "Band successfully registered"});
        } catch (error) {
            res.status(error.code || 400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getBandByIdOrName(req: Request, res: Response) {
        try {
            const id: string = req.body.id as string
            const name: string = req.body.name as string
            const token: string = req.headers.authorization as string

            const band: Band | undefined = await BandController.bandBusiness.getBandByIdOrName(id, name, token)

            res.status(200).send({ band });
        } catch (error) {
            res.status(error.code || 400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}