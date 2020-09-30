import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { AuthenticationData } from '../services/tokenGenerator'

export class UserController {
  
  private static userBusiness = new UserBusiness(
     new UserDatabase(),
     new IdGenerator(),
     new HashGenerator(),
     new TokenGenerator()
  );

  public async signup(req: Request, res: Response) {
    try {
      const result = await UserController.userBusiness.signup(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async login(req: Request, res: Response) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const result = await UserController.userBusiness.login(email, password);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  }

  public async getUserById(req: Request, res: Response) {
    const id = req.params.id as string

    try {
      const result = await UserController.userBusiness.getUserById(id)

      res.status(200).send(result)
    } catch (error) {
      res.status(error.statusCode || 400).send({message: error.message})
    }
  }

  public async getAllUsers(req: Request, res: Response) {
    const token = req.headers.authorization as string

    const tokenGenerator: TokenGenerator = new TokenGenerator()
    const data: AuthenticationData = tokenGenerator.verify(token)

    try {
      const result = await UserController.userBusiness.getAllUsers(data.role)
      res.status(200).send(result)
    } catch (error) {
      res.status(error.statusCode || 400).send({message: error.message})
    }
  }

  public async getOwnProfile(req: Request, res: Response) {
    const token = req.headers.authorization as string

    const tokenGenerator: TokenGenerator = new TokenGenerator()
    const data: AuthenticationData = tokenGenerator.verify(token)

    try {
      const result = await UserController.userBusiness.getOwnProfile(data.id)
      res.status(200).send(result)
    } catch (error) {
      res.status(error.statusCode || 400).send({message: error.message})
    }
  }
}
