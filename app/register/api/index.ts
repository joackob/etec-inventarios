import { User } from "@/app/types";
import { ApiResult } from "./ApiResult";
import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

export type SignUpProps =
  | User
  | Readonly<{
      password: string;
      passwordToConfirm: string;
    }>;

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signUp = async (user: SignUpProps) => {
  try {
    return new ApiResult(await axios.post("api/auth/sign-up", user, config));
  } catch (error) {
    return new ApiResult(new Response(null, { status: 500 }));
  }
};
