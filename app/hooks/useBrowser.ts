import { useRouter } from "next/navigation";

export const useBrowser = () => {
  const router = useRouter();
  const toSignUpPage = () => router.push("/sign-up");
  const toSignInPage = () => router.push("/sign-in");
  return { toSignInPage, toSignUpPage } as const;
};
