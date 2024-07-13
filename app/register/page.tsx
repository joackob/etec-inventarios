"use client";

import {
  FeedbackAtErrorRegister,
  FeedbackAtLoadRegister,
  FormRegister,
} from "./components";
import { useRegister } from "./hooks";

const Page = () => {
  const [status, register] = useRegister();

  return (
    <>
      <FeedbackAtErrorRegister info={status} />
      <FeedbackAtLoadRegister info={status} />
      <FormRegister onCompleted={register} />
    </>
  );
};

export default Page;
