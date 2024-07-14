import { useRouter } from "next/navigation";

export const useBrowser = () => {
  const router = useRouter();
  const toSignUp = () => router.push("/sign-up");
  const toSignIn = () => router.push("/sign-in");
  return { toSignIn, toSignUp } as const;
};
