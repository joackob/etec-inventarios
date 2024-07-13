import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();
  const toLogin = () => router.push("/login");
  const toRegister = () => router.push("/register");
  return { toLogin, toRegister } as const;
};
