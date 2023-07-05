import { Box, Card, Stack, Typography } from "@mui/material";
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
      <Stack direction="row" justifyContent="space-between" alignItems="stretch">
        {/* Title and subtitle */}
        <Stack className="m-5" direction="column">
          <Typography variant="h5"> {props.title}</Typography>
          <Typography variant="body2"> {props.subtitle}</Typography>
        </Stack>

        {/* icon */}
        <Box bgcolor={props.color} className="flex justify-center items-center w-[50px]">
          <props.icon className="text-white" />
        </Box>
      </Stack>
    </Card>
  );
}
