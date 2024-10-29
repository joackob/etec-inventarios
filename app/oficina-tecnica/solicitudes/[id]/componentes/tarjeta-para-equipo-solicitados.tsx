import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";


export default function TarjetaParaEquipoSolicitados() {
  return (
    <Paper>
      <Stack
        bgcolor={"#FAFDFD"}
        borderRadius={2}
        direction={"row"}
        spacing={"16px"}
        padding={"16px"}
        alignItems={"center"}
      >
        <Box>
          <Typography
            gutterBottom
            component="h5"
            style={{
              color: "#000000",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Equipo e insumos solicitados y disponibles
          </Typography>
          <Typography
            gutterBottom
            component="h5"
            style={{
              color: "#000000",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Ordenador portatil
            <Typography
              component="p"
              style={{
                color: "#000000",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              10 unidades
            </Typography>
          </Typography>
          <Typography
            gutterBottom
            component="h5"
            style={{
              color: "#000000",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Arduino UNO
            <Typography
              component="p"
              style={{
                color: "#000000",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              10 unidades
            </Typography>
          </Typography>
          <button style={{ height: "32px" }}>
            aprobar items disponibles
          </button>
        </Box>
      </Stack>
    </Paper>

  );
}
