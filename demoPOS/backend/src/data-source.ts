import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "demopos",
  port: 27018,
  host: "127.0.0.1",
  synchronize: true,
  logging: false,
  entities: [Users],
  migrations: [],
  subscribers: [],
});
