import { useState } from "react";

export type Status = Readonly<{
  error: string | null;
  loading: boolean;
  success: boolean;
}>;

const useStatus = () => {
  const [status, setStatus] = useState<Status>({
    error: null,
    loading: false,
    success: false,
  });

  return [status, setStatus] as const;
};

export default useStatus;
