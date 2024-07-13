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
    const response = await axios.post("api/auth/sign-up", user, config);
    return new ApiResult(response);
  } catch (error) {
    const response = new Response(null, { status: 500 });
    return new ApiResult(response);
  }
};
