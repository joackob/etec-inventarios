import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";

export default function TarjetaParaEquipoSolicitados({
  items,
}: {
  items: { descripcion: string; unidades: number }[];
}) {
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
          {items.map((item) => {
            return (
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
                {item.descripcion}
                <Typography
                  component="p"
                  style={{
                    color: "#000000",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {item.unidades} unidades
                </Typography>
              </Typography>
            );
          })}

          <button style={{ height: "32px" }}>aprobar items disponibles</button>
        </Box>
      </Stack>
    </Paper>
  );
}
