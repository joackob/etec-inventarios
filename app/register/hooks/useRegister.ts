import { useRouter } from "next/navigation";
import { FormRegisterCompletedEventProps } from "../components/types";
import useStatus from "./useStatus";

const register = async (user: FormRegisterCompletedEventProps) => {
  return await fetch("api/auth/sign-up", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const useRegister = () => {
  const [status, setStatus] = useStatus();
  const router = useRouter();

  const tryRegister = async (user: FormRegisterCompletedEventProps) => {
    setStatus({ error: null, success: false, loading: true });
    try {
      const res = await register(user);
      switch (res.status) {
        case 201:
          router.push("/login");
          break;
        case 403:
          setStatus({
            error: "El email ya está en uso",
            success: false,
            loading: false,
          });
          break;
      }
    } catch (error) {
      setStatus({ error: "Hubo un problema", loading: false, success: false });
    }
  };

  return [status, tryRegister] as const;
};

export default useRegister;
