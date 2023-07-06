import { Product } from "@/types/product.type";
import React from "react";

type Props = {
  order: string;
};

export default function Payment({ order }: Props) {
  const orderList = JSON.parse(order) as Product[];

  return (
    <div>
      Payment {orderList[0].name}
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
