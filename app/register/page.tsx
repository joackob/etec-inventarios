"use client";

import {
  FeedbackAtErrorRegister,
  FeedbackAtLoadRegister,
  FormRegister,
} from "./components";
import { useRegister } from "./hooks";

const Page = () => {
  const [statusRegister, tryRegister] = useRegister();

  return (
    <>
      <FeedbackAtErrorRegister error={statusRegister.error} />
      <FeedbackAtLoadRegister isLoad={statusRegister.loading} />
      <FormRegister onCompleted={tryRegister} />
    </>
  );
};

export default Page;
