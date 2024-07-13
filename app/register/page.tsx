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
      <FeedbackAtErrorRegister info={statusRegister} />
      <FeedbackAtLoadRegister info={statusRegister} />
      <FormRegister onCompleted={tryRegister} />
    </>
  );
};

export default Page;
