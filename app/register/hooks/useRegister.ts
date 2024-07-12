import { useRouter } from "next/navigation";
import { FormRegisterCompletedEventProps } from "../components/types";
import { signUp } from "../api";
import useStatus, { Status } from "./useStatus";

const useRegister = () => {
  const [status, setStatus] = useStatus();
  const router = useRouter();

  const tryRegister = async (user: FormRegisterCompletedEventProps) => {
    setStatus({ status: Status.Loading });
    const res = await signUp(user);
    res.onSuccess(() => {
      router.push("/login");
    });
    res.onError((message) => {
      setStatus({ status: Status.Error, message });
    });
    res.apply();
  };

  return [status, tryRegister] as const;
};

export default useRegister;
