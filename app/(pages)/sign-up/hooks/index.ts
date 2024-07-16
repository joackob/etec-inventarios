import { OnCompleteSignUpFormProps } from "../types";
import { useProcessStatus } from "@/app/hooks";
import { useBrowser } from "@/app/hooks";
import { users } from "../api";

type SignUpProps = OnCompleteSignUpFormProps;

export const useSignUpProcess = () => {
  const process = useProcessStatus();
  const browser = useBrowser();

  const signUp = (user: SignUpProps) => {
    users.post({
      user,
      onLoading: process.setLoading,
      onError: process.setError,
      onSuccess: () => {
        process.setSuccess();
        browser.toSignInPage();
      },
    });
  };

  const { isError, isLoading, getInformation } = process;
  return { signUp, isError, isLoading, getInformation } as const;
};
