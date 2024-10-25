import { Stack, TextField, Button, Collapse, Alert } from "@mui/material";
import { ReactNode } from "react";

type EventoAlCompletarFormulario = (datos: any) => void;
export const Formulario = ({
  children,
  alCompletar,
}: {
  children: ReactNode;
  alCompletar: EventoAlCompletarFormulario;
}) => (
  <Stack component={"form"} spacing={"24px"} action={alCompletar}>
    {children}
  </Stack>
);

export const CamposACompletar = () => (
  <>
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
  </>
);

export const BotonParaFinalizarFormulario = ({
  deshabilitado,
}: {
  deshabilitado: boolean;
}) => (
  <Button type="submit" variant="contained" disabled={deshabilitado}>
    continuar
  </Button>
);

export const MensajeDeAdvertencia = ({
  visible,
  advertencia,
}: {
  visible: boolean;
  advertencia: string;
}) => (
  <Collapse in={visible}>
    <Alert severity="error">{advertencia}</Alert>
  </Collapse>
);
