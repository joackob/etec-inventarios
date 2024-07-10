"use client";

import FormRegister, {
  FormRegisterCompletedEvent,
} from "./components/FormRegister";

const page = () => {
  const handleCompleted: FormRegisterCompletedEvent = async (event) => {
    const res = await fetch("api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res_json = await res.json();
    console.log(res_json);
  };

  return <FormRegister onCompleted={handleCompleted} />;
};

export default page;
