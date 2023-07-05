import { ProductController } from "./controller/ProductController";
import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "post",
    route: "/register",
    controller: UserController,
    action: "register",
  },
  {
    method: "post",
    route: "/login",
    controller: UserController,
    action: "login",
  },

  {
    method: "get",
    route: "/accounts",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/product",
    controller: ProductController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
];
