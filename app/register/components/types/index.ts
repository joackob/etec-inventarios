export type FormRegisterCompletedEventProps = Readonly<{
  name: string;
  lastname: string;
  email: string;
  password: string;
  passwordToConfirm: string;
}>;

export type FormRegisterCompletedEvent = (
  event: FormRegisterCompletedEventProps,
) => void;
