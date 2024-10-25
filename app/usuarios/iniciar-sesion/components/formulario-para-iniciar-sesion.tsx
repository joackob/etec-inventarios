"use client";
import { useSesion } from "../hooks";
import {
  Formulario,
  CamposACompletar,
  BotonParaFinalizarFormulario,
  MensajeDeAdvertencia,
} from "./componentes-para-el-formulario";

export const FormularioParaIniciarSesion = () => {
  const sesion = useSesion();

  return (
    <Formulario alCompletar={sesion.enviarSolicitud}>
      <CamposACompletar />
      <BotonParaFinalizarFormulario deshabilitado={sesion.estaEnProceso()} />
      <MensajeDeAdvertencia
        visible={sesion.huboUnProblema()}
        advertencia={sesion.describirElProblema()}
      />
    </Formulario>
  );
};
