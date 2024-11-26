import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";

export default function TarjetaParaDescripcionItem() {
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
            Ordenador portatil Lenovo
            <Typography
              component="p"
              style={{
                color: "#000000",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              10 unidades disponibles - 4 en uso
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
