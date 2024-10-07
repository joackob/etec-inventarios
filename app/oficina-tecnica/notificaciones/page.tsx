"use client";
import React from "react";
import TarjetaParaSolicitudEntrante from "./componentes/card";
import { Paper, Stack, Typography } from "@mui/material";
import db from "@/db";
import axios from "axios";

const Page = () => {
  // const response = await axios.get("http://localhost:3000/api/notificaciones");
  // const { notificaciones } = response.data;

  return (
    <Paper
      elevation={8}
      style={{
        backgroundColor: "#FFFFFF",
        padding: "16px 8px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <Stack spacing={"16px"} sx={{ boxShadow: "0px 0px 0px 0px " }}>
        <Typography
          style={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Novedades
        </Typography>
        <Stack spacing={"8px"}>
          {/* {notificaciones.map(
            (notificacion: {
              id: string;
              solicitante: { name: string; lastname: string };
            }) => {
              return (
                <TarjetaParaSolicitudEntrante
                  key={notificacion.id}
                  iniciales={
                    notificacion.solicitante.name[0] +
                    notificacion.solicitante.lastname[0]
                  }
                  solicitante={
                    notificacion.solicitante.name +
                    " " +
                    notificacion.solicitante.lastname
                  }
                />
              );
            }
          )} */}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Page;
