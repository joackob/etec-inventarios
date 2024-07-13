import axios, { AxiosRequestConfig } from "axios";
import { OnCompleteFormRegisterProps } from "../types";

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

type OnSuccessCallback = () => void;
type OnErrorCallback = (message: string) => void;
type OnLoadingCallback = () => void;

type PostUserProps = {
  user: OnCompleteFormRegisterProps;
  onSuccess: OnSuccessCallback;
  onError: OnErrorCallback;
  onLoading: OnLoadingCallback;
};

const post = (props: PostUserProps) => {
  props.onLoading();
  const response = axios.post("api/auth/sign-up", props.user, config);
  response
    .then((res) => {
      switch (res.status) {
        case 201: {
          props.onSuccess();
          break;
        }
        default: {
          props.onError(res.data.message);
          break;
        }
      }
    })
    .catch(() => {
      props.onError("Parece que no hay internet");
    });
};

export const users = { post };
