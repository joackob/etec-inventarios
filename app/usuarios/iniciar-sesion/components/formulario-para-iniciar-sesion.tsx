import { TextField, Button, Stack } from "@mui/material";

export const FormularioParaIniciarSesion = () => {
  return (
    <Stack component={"form"} spacing={"24px"}>
      <TextField
        type="email"
        variant="standard"
        id="email-field"
        name="email"
        placeholder="Email"
      />
      <TextField
        type="password"
        variant="standard"
        id="password-field"
        name="password"
        placeholder="Contraseña"
      />
      <Button style={{ backgroundColor: "#0077B6" }} variant="contained">
        continuar
      </Button>
    </Stack>
  );
};
