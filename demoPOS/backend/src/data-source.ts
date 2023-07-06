import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/Users";
import { Products } from "./entity/Products";
import { Transactions } from "./entity/Transactions";
import { Counters } from "./entity/Counters";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "demopos",
  port: 27018,
  host: "127.0.0.1",
  synchronize: true,
  logging: false,
  entities: [Users, Products, Transactions, Counters],
  migrations: [],
  subscribers: [],
});
