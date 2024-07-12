import { useState } from "react";

export enum Status {
  Error,
  Loading,
  Success,
  Init,
}

export type MetaStatus = {
  status: Status;
  message?: string;
};

const useStatus = () => {
  const [status, setStatus] = useState<MetaStatus>({
    status: Status.Init,
  });
  return [status, setStatus] as const;
};

export default useStatus;
