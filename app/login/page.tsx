import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Container>
      <Stack marginTop={"20vh"} spacing={"24px"}>
        <Typography
          variant="h5"
          sx={{
            textTransform: "capitalize",
          }}
        >
          iniciar sesión
        </Typography>
        <Stack spacing={"16px"}>
          <TextField
            type="email"
            variant="outlined"
            id="email-field"
            placeholder="Email"
          />
          <TextField
            type="password"
            variant="outlined"
            id="email-field"
            placeholder="Contraseña"
          />
          <Button variant="contained">continuar</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default page;
