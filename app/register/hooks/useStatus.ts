import { useState } from "react";

export enum State {
  Error,
  Loading,
  Success,
  Init,
}

export type InfoAboutState = {
  state: State;
  information: string;
};

const useStatus = () => {
  const [state, setState] = useState<InfoAboutState>({
    state: State.Init,
    information: "Inicializando...",
  });

  const setLoading = () =>
    setState({ state: State.Loading, information: "Carregando..." });

  const setError = (message: string) =>
    setState({ state: State.Error, information: message });

  const setSuccess = (message: string) =>
    setState({ state: State.Success, information: message });

  return [state, setLoading, setError, setSuccess] as const;
};

export default useStatus;
