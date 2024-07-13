"use client";

import {
  FeedbackAtErrorRegister,
  FeedbackAtLoadRegister,
  FormRegister,
} from "./components";
import { useRegister } from "./hooks";

const Page = () => {
  const { status, toRegister } = useRegister();

  return (
    <>
      <FeedbackAtErrorRegister info={status} />
      <FeedbackAtLoadRegister info={status} />
      <FormRegister onCompleted={toRegister} />
    </>
  );
};

export default Page;
