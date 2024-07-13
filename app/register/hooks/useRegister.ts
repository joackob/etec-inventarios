import { OnCompleteFormRegisterProps } from "../types";
import { useStatus } from "./useStatus";
import { useNavigation } from "./useNavigation";
import { users } from "../api";

type RegisterProps = OnCompleteFormRegisterProps;

export const useRegister = () => {
  const { status, setLoading, setError, setSuccess } = useStatus();
  const browser = useNavigation();

  const toRegister = (user: RegisterProps) => {
    users.post({
      user,
      onLoading: setLoading,
      onError: setError,
      onSuccess: () => {
        setSuccess();
        browser.toLogin();
      },
    });
  };

  return { status, toRegister } as const;
};
