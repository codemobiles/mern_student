import { User } from "@/types/user.type";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState<User>({ username: "", password: "" });

  return (
    <Box>
      <Card elevation={10} className="p-5">
        <Typography variant="h4" className="!mb-3">
          Login
        </Typography>
        <form onSubmit={() => alert("Submit")}>
          <TextField
            fullWidth
            label="Username"
            onChange={(e) =>
              setUser({ username: e.target.value, password: user.password })
            }
          />
          <div className="h-2"></div>
          <TextField fullWidth label="Password" />
          <div className="h-2"></div>
          <Button type="submit" fullWidth variant="contained">
            Submit
          </Button>
        </form>
      </Card>
    </Box>
  );
}
