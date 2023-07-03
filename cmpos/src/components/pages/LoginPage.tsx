import { User } from "@/types/user.type";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";

const initialValue: User = { username: "", password: "" };
const formValidateSchema = Yup.object().shape({
  // username: Yup.string().email("Invalid email address").required("Email is required").trim(),
  username: Yup.string()
    .min(4)
    .required("Username must be more than 3 letters")
    .trim(),
  password: Yup.string().required("Password is required").trim(),
});

export default function LoginPage() {
  // Hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
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
              <TextField
                fullWidth
                label="Username"
                {...field}
                helperText="Error"
                error
              />
            )}
          />

          <div className="h-5"></div>

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
