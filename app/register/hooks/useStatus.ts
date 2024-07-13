import { useState } from "react";

export enum Status {
  Error,
  Loading,
  Success,
  Init,
}

export type InfoAboutStatus = {
  status: Status;
  information: string;
};

export const useStatus = () => {
  const [state, setState] = useState<InfoAboutStatus>({
    status: Status.Init,
    information: "Proceso iniciado",
  });

  const setLoading = () =>
    setState({ status: Status.Loading, information: "Procesando solicitud" });

  const setError = (message: string) =>
    setState({ status: Status.Error, information: message });

  const setSuccess = () =>
    setState({ status: Status.Success, information: "Solicitud aprobada" });

  return { status: state, setLoading, setError, setSuccess } as const;
};
