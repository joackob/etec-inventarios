"use client";

import {
  FeedbackAtErrorRegister,
  FeedbackAtLoadRegister,
  FormRegister,
} from "./components";
import { useRegister } from "./hooks";
import { Status } from "./hooks/useStatus";

const Page = () => {
  const [statusRegister, tryRegister] = useRegister();
  const isLoading = statusRegister.status === Status.Loading;
  const hasAProblem = statusRegister.status === Status.Error;
  const problem = statusRegister.message ?? "Ups! Algo no salio bien";

  return (
    <>
      <FeedbackAtErrorRegister hasAProblem={hasAProblem} problem={problem} />
      <FeedbackAtLoadRegister isLoading={isLoading} />
      <FormRegister onCompleted={tryRegister} />
    </>
  );
};

export default Page;
