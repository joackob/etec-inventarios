import { OnCompleteSignUpFormProps } from "../types";
import { useProcessStatus } from "@/app/hooks";
import { useBrowser } from "@/app/hooks";
import { users } from "../api";

type RegisterProps = OnCompleteSignUpFormProps;

export const useSignUpProcess = () => {
  const { processStatus, setLoading, setError, setSuccess } =
    useProcessStatus();
  const browser = useBrowser();

  const signUp = (user: RegisterProps) => {
    users.post({
      user,
      onLoading: setLoading,
      onError: setError,
      onSuccess: () => {
        setSuccess();
        browser.toSignIn();
      },
    });
  };

  return { processStatus, signUp } as const;
};
