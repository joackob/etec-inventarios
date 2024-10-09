import { Paper, Stack } from "@mui/material";
import { ReactNode } from "react";

export const FormatoParaElFormulario = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Paper elevation={4}>
      <Stack
        spacing={"16px"}
        padding={"16px"}
        marginTop={"32vh"}
        marginBottom={"16px"}
      >
        {children}
      </Stack>
    </Paper>
  );
};
