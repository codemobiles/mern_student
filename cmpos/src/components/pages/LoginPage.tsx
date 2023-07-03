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
        <form onSubmit={() => alert(JSON.stringify(user))}>
          <TextField
            fullWidth
            label="Username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <div className="h-2"></div>
          <TextField
            fullWidth
            label="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
