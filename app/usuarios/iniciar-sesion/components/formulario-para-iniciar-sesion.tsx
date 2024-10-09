"use client";
import { TextField, Button, Stack, Alert, Collapse } from "@mui/material";
import { useSesion } from "../hooks";
import { ReactNode } from "react";

export const FormularioParaIniciarSesion = () => {
  const sesion = useSesion();

  return (
    <Formulario alCompletar={sesion.iniciar}>
      <CamposACompletar />
      <BotonParaFinalizarFormulario deshabilitado={sesion.estaEnProceso()} />
      <MensajeDeAdvertencia
        visible={sesion.huboUnProblema()}
        advertencia={sesion.describirElProblema()}
      />
    </Formulario>
  );
};

type EventoAlCompletarFormulario = (datos: any) => void;
const Formulario = ({
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

const CamposACompletar = () => (
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

const BotonParaFinalizarFormulario = ({
  deshabilitado,
}: {
  deshabilitado: boolean;
}) => (
  <Button type="submit" variant="contained" disabled={deshabilitado}>
    continuar
  </Button>
);

const MensajeDeAdvertencia = ({
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
