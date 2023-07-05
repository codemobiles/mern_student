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
        <Stack direction="column">
          <Typography variant="h5"> {props.title}</Typography>
          <Typography variant="body2"> {props.subtitle}</Typography>
        </Stack>

        {/* icon */}
        <Box bgcolor={props.color}>
          <props.icon />
        </Box>
      </Stack>
    </Card>
  );
}
