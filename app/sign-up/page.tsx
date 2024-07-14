"use client";

import {
  SignUpForm,
  SignUpProcessError,
  SignUpProcessProgress,
} from "./components";
import { useSignUpProcess } from "./hooks";

const Page = () => {
  const { processStatus, signUp } = useSignUpProcess();

  return (
    <>
      <SignUpProcessProgress status={processStatus} />
      <SignUpProcessError status={processStatus} />
      <SignUpForm onCompleted={signUp} />
    </>
  );
};

export default Page;
