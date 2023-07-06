import React from "react";

type Props = {
  order: string;
};

export default function Payment({ order }: Props) {
  return <div>Payment {order}</div>;
}
