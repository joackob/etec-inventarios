import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";


export default function TarjetaParaEquipoSinExistencias() {
  return (

    <Paper>
      <Stack
        marginBottom={"20px"}
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
            Equipo e insumos solicitados sin existencias
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
            Pizarra de corcho - 120 x 80cm
            <Typography
              component="p"
              style={{
                color: "#000000",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              2 unidades
            </Typography>
          </Typography>
          <button style={{ height: "32px" }}>
            agregar al carrito de compras
          </button>
        </Box>
      </Stack>
    </Paper>
  );
}
