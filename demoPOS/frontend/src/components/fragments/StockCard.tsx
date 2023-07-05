import { Card, Stack } from "@mui/material";
import React from "react";

type Props = {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
};

export default function StockCard(props: Props) {
  return (
    <Card elevation={7}>
      <Stack>{props.title}</Stack>
    </Card>
  );
}
