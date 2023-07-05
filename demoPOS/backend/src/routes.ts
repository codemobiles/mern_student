import { UserController } from "./controller/UserController";
import { ProductController } from "./controller/ProductController";
import { TransactionController } from "./controller/TransactionController";

const authRoutes = [
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
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "get",
    route: "/users/remove/:username",
    controller: UserController,
    action: "remove",
  },
];

const productRoutes = [
  {
    method: "get",
    route: "/product",
    controller: ProductController,
    action: "all",
  },
  {
    method: "get",
    route: "/product/id/:product_id",
    controller: ProductController,
    action: "one",
  },
  {
    method: "post",
    route: "/product",
    controller: ProductController,
    action: "add",
  },
  {
    method: "put",
    route: "/product",
    controller: ProductController,
    action: "update",
  },
  {
    method: "delete",
    route: "/product/id/:product_id",
    controller: ProductController,
    action: "remove",
  },
  {
    method: "get",
    route: "/product/name/:name",
    controller: ProductController,
    action: "allLike",
  },
];

const transactionRoutes = [
  {
    method: "get",
    route: "/transaction",
    controller: TransactionController,
    action: "all",
  },
  {
    method: "get",
    route: "/transaction/between/:startDate/:endDate",
    controller: TransactionController,
    action: "between",
  },
  {
    method: "post",
    route: "/transaction",
    controller: TransactionController,
    action: "add",
  },
  {
    method: "get",
    route: "/transaction/id/:transaction_id",
    controller: TransactionController,
    action: "one",
  },
];

export const Routes = [...authRoutes, ...productRoutes, ...transactionRoutes];
