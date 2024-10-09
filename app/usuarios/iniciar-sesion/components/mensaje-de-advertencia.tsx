import { Alert } from "@mui/material";

export const MensajeDeAdvertencia = ({ mensaje }: { mensaje: string }) => {
  return <Alert severity="error">{mensaje}</Alert>;
};
