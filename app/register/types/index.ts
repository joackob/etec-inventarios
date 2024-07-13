import type { User } from "@/app/types";

export type FormRegisterCompletedEventProps =
  | User
  | Readonly<{
      password: string;
      passwordToConfirm: string;
    }>;

export type FormRegisterCompletedEvent = (
  event: FormRegisterCompletedEventProps
) => void;
