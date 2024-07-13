export type PostUserProps = OnFormRegisterCompletedEventProps;

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const post = async (user: PostUserProps) => {
  try {
    const response = await axios.post("api/auth/sign-up", user, config);
    return new ApiResult(response);
  } catch (error) {
    const response = new Response(null, { status: 500 });
    return new ApiResult(response);
  }
};
