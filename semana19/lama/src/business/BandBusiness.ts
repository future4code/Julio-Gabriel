import { BandInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator, AuthenticationData } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";
import { UnauthorizedError } from "../error/UnauthorizedError";

export class BandBusiness {
    constructor(
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
     ){}

    async registerBand(band: BandInputDTO, token: string) {
        if (!band.music_genre || !band.name || !band.responsible || !token) {
            throw new InvalidParameterError("Missing input");
        }

        const user: AuthenticationData = this.authenticator.getData(token)

        if(user.role !== "ADMIN") {
            throw new UnauthorizedError("You must be an admin to access this endpoint")
        }

        const id = this.idGenerator.generate();

        await this.bandDatabase.registerBand(id, band.name, band.music_genre, band.responsible);
    }

    async getBandByIdOrName(id: string, name: string, token: string) {
        if ((!id && !name) || !token) {
            throw new InvalidParameterError("Missing input");
        }

        if (id && name) {
            throw new InvalidParameterError("You can only search for a band by id or name and not two at the same time.")
        }

        if(id && !name) {
            const getBandByIdFromDB = await this.bandDatabase.getBandById(id);

            if (!getBandByIdFromDB) {
                throw new NotFoundError("Band not found");
            }
    
            return getBandByIdFromDB;
        }

        if(name && !id) {
            const getBandByNameFromDB = await this.bandDatabase.getBandByName(name);

            if (!getBandByNameFromDB) {
                throw new NotFoundError("Band not found");
            }
    
            return getBandByNameFromDB;
        }
    }
}