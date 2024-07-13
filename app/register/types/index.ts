import type { User } from "@/app/types";

export type OnCompleteFormRegisterProps =
  | User
  | Readonly<{
      password: string;
      passwordToConfirm: string;
    }>;

export type OnCompleteFormRegister = (
  event: OnCompleteFormRegisterProps,
) => void;
