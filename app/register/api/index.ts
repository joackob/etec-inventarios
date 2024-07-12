export type SignUpProps = Readonly<{
  name: string;
  lastname: string;
  email: string;
  password: string;
  passwordToConfirm: string;
}>;

export type OnSuccess = () => void;
export type OnError = (message: string) => void;

export class ApiResult {
  res: Response;
  callbackOnSuccess: OnSuccess = () => {};
  callbackOnError: OnError = () => {};

  constructor(res: Response) {
    this.res = res;
  }

  onSuccess(callback: OnSuccess) {
    this.callbackOnSuccess = callback;
    return this;
  }

  onError(callback: OnError) {
    this.callbackOnError = callback;
    return this;
  }

  apply() {
    switch (this.res.status) {
      case 201:
        this.callbackOnSuccess();
        break;
      case 403:
        this.callbackOnError("El email ya está en uso");
        break;
      default:
        this.callbackOnError("Hubo un problema");
    }

    return this;
  }
}

export const signUp = async (user: SignUpProps) => {
  try {
    return new ApiResult(
      await fetch("api/auth/sign-up", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );
  } catch (error) {
    return new ApiResult(new Response(null, { status: 500 }));
  }
};
