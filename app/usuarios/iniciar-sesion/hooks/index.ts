import { useFormState, useFormStatus } from "react-dom";
import { intentarIniciarLaSesionDeUnUsuario } from "../actions";

export const useSesion = () => {
  const accion = async (_: any, data: FormData) => {
    return await intentarIniciarLaSesionDeUnUsuario({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [mensaje, dispatch] = useFormState(accion, undefined);
  const status = useFormStatus();

  const huboUnProblema = () => mensaje !== undefined;
  const estaEnProceso = () => status.pending;
  const describirElProblema = () => mensaje ?? "";

  return {
    iniciar: dispatch,
    huboUnProblema,
    estaEnProceso,
    describirElProblema,
  } as const;
};
