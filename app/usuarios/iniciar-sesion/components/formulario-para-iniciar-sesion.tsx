"use client";
import { TextField, Button, Stack, Alert } from "@mui/material";
import { intentarIniciarLaSesionDeUnUsuario } from "../actions";
import { useFormState } from "react-dom";

export const FormularioParaIniciarSesion = () => {
  const [mensaje, dispatch] = useFormState(
    intentarIniciarLaSesionDeUnUsuario,
    undefined,
  );
  return (
    <Stack component={"form"} spacing={"24px"} action={dispatch}>
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
      <Button type="submit" variant="contained">
        continuar
      </Button>
      {mensaje && <Alert severity="error">{mensaje}</Alert>}
    </Stack>
  );
};
