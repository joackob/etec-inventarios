
import React from "react";
import TarjetaParaSolicitudEntrante from "./componentes/card";
import { Paper, Stack, Typography } from "@mui/material";
import db from "@/db"

const Page = async () => {
  const notificaciones = await db.notificaciones.findMany({})
  return (
    <Paper elevation={8} style={{ backgroundColor: "#FFFFFF", padding: "16px 8px", margin: "10px", borderRadius: "8px" }}>
      <Stack spacing={"16px"} sx={{ boxShadow: "0px 0px 0px 0px " }}>

        <Typography style={{ color: "#000000", fontFamily: "Roboto", fontSize: "16px", fontWeight: 600 }}>Novedades</Typography>
        <Stack spacing={"8px"}>
          <TarjetaParaSolicitudEntrante />
          <TarjetaParaSolicitudEntrante />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Page;
