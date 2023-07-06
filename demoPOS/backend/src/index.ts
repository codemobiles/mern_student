import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import * as cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(express.static(process.env.ROOT_PATH + "/uploaded"));

    const interceptor1 = (req, res, next) => {
      if (req.query.token1 == "1234") {
        next();
      } else {
        res.json({ result: "nok", message: "no token1" });
      }
    };

    const interceptor2 = (req, res, next) => {
      if (req.query.token2 == "555") {
        next();
      } else {
        res.json({ result: "nok", message: "no token2" });
      }
    };

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        "/api/v2" + route.route,
        interceptor1,
        interceptor2,

        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](req, res, next);
          if (result instanceof Promise) {
            result.then((result) => (result !== null && result !== undefined ? res.send(result) : undefined));
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // setup express app here
    // ...

    // start express server
    app.listen(8081);

    console.log("Express server has started on port 8081. Open http://localhost:8081/users to see results");
  })
  .catch((error) => console.log(error));
