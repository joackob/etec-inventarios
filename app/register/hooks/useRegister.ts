import { useRouter } from "next/navigation";
import { OnCompleteFormRegisterProps } from "../types";
import { signUp } from "../api";
import useStatus, { State } from "./useStatus";

type UserToRegister = OnCompleteFormRegisterProps;

const useRegister = () => {
  const [status, setStatus] = useStatus();
  const router = useRouter();

  const registerNewUser = (user: UserToRegister) => {
    const response = postNewUser(user);
    response
      .onLoading(() => {
      setStatus({ state: State.Loading })}
      .onSuccess(() => {
        router.push("/login");
      })
      .onError((message) => {
        setStatus({ state: State.Error, message });
      })
      .apply();
  };

  return [status, registerNewUser] as const;
};

export default useRegister;
