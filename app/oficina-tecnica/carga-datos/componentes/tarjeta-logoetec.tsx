import * as React from "react";
import { Paper, Stack } from "@mui/material";
import { LogoETEC } from "@/app/components/logo-etec";

export default function TarjetaParaUnLogoEtec() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Paper style={{ backgroundColor: "FFFFFF" }}>
        <Stack
          bgcolor={"#FAFDFD"}
          borderRadius={2}
          direction={"row"}
          spacing={"16px"}
          padding={"16px"}
          alignItems={"center"}
        >
          {/* <img src="" alt="" /> */}
        </Stack>
        <LogoETEC></LogoETEC>
      </Paper>
    </div>
  );
}
