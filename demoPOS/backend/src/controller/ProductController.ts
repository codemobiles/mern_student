import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";
import { Products } from "../entity/Products";

export class ProductController {
  private productRepo = AppDataSource.getMongoRepository(Products);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.productRepo.find();
  }

  async allLike(req: Request, res: Response, next: NextFunction) {
    return this.productRepo.find({
      where: { name: new RegExp("^.*" + req.params.name + ".*$", "i") },
    });
  }
}
