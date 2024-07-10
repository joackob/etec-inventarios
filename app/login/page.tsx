"use client";

import FormLogin, { FormCompletedEvent } from "./components/FormLogin";

const Page = () => {
  const handleCompleted: FormCompletedEvent = (event) => {
    console.log(event);

    return;
  };
  return <FormLogin onCompleted={handleCompleted} />;
};

export default Page;
