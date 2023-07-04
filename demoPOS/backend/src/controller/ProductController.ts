import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/User";

export class ProductController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  async all(request: Request, response: Response, next: NextFunction) {
    return "Yes";
  }
}
