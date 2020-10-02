import { UserInputDTO, LoginInputDTO, UserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager ,
        private authenticator: Authenticator
     ){}

    async createUser(user: UserInputDTO) {
        if (!user.name || !user.email || !user.password || !user.role) {
            throw new InvalidParameterError("Missing input");
        }

        if (user.email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        if (user.password.length < 6) {
            throw new InvalidParameterError("Invalid password");
        }

        if (user.role !== UserRole.ADMIN && user.role !== UserRole.NORMAL)  {
            throw new InvalidParameterError("Invalid role")
        }

        const id = this.idGenerator.generate();

        const hashPassword = await this.hashManager.hash(user.password);

        await this.userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);

        const accessToken = this.authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    async getUserByEmail(user: LoginInputDTO) {
        if (!user.email || !user.password) {
            throw new InvalidParameterError("Missing input");
        }

        if (user.email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        if (user.password.length < 6) {
            throw new InvalidParameterError("Invalid password");
        }
    
        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

        if (!userFromDB) {
            throw new NotFoundError("User not found");
        }

        const hashCompare = await this.hashManager.compare(user.password, userFromDB.getPassword());

        if (!hashCompare) {
            throw new InvalidParameterError("Invalid Password!");
        }

        const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        return accessToken;
    }
}