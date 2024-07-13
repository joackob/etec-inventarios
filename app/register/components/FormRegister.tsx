"use client";

import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { OnCompleteFormRegister } from "../types";

const FormRegister = ({
  onCompleted,
}: {
  onCompleted: OnCompleteFormRegister;
}) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordToConfirmRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    onCompleted({
      name: nameRef.current?.value || "",
      lastname: lastnameRef.current?.value || "",
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
      passwordToConfirm: passwordToConfirmRef.current?.value || "",
    });
  };

  return (
    <Container maxWidth="xs">
      <Stack marginTop={"10vh"} spacing={"24px"}>
        <Typography
          variant="h5"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          registrate
        </Typography>
        <Stack spacing={"16px"}>
          <TextField
            type="text"
            variant="outlined"
            id="name-field"
            placeholder="Nombre"
            inputRef={nameRef}
          />
          <TextField
            type="text"
            variant="outlined"
            id="lastname-field"
            placeholder="Apellido"
            inputRef={lastnameRef}
          />
          <TextField
            type="email"
            variant="outlined"
            id="email-field"
            placeholder="Email"
            inputRef={emailRef}
          />
          <TextField
            type="password"
            variant="outlined"
            id="password-field"
            placeholder="Contraseña"
            inputRef={passwordRef}
          />
          <TextField
            type="password"
            variant="outlined"
            id="password-to-confirm-field"
            placeholder="Repetir contraseña"
            inputRef={passwordToConfirmRef}
          />
          <Button variant="contained" onClick={handleSubmit}>
            continuar
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default FormRegister;
