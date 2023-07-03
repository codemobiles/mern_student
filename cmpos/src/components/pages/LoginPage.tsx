import { User } from "@/types/user.type";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";

const initialValue: User = { username: "", password: "" };

export default function LoginPage() {
  const { control, handleSubmit } = useForm<User>({
    defaultValues: initialValue,
  });

  const submit = (values: User) => {
    alert(JSON.stringify(values));
  };

  return (
    <Box>
      <Card elevation={10} className="p-5">
        <Typography variant="h4" className="!mb-3">
          Login
        </Typography>
        <form onSubmit={handleSubmit(submit)}>
          {/* Username */}
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextField fullWidth label="Username" {...field} />
            )}
          />

          <div className="h-2"></div>

          {/* Password */}
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField fullWidth label="Password" {...field} />
            )}
          />

          <div className="h-2"></div>
          <Button type="submit" fullWidth variant="contained">
            Submit
          </Button>
        </form>
      </Card>
    </Box>
  );
}
