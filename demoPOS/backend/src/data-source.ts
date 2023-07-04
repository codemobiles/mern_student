import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/Users";
import { Products } from "./entity/Products";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "demopos",
  port: 27018,
  host: "127.0.0.1",
  synchronize: true,
  logging: false,
  entities: [Users, Products],
  migrations: [],
  subscribers: [],
});
