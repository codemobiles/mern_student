import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/User";
import { Products } from "../entity/Products";

export class ProductController {
  private productsRepository = AppDataSource.getMongoRepository(Products);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.productsRepository.find();
  }
}
