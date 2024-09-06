import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Stack } from "@mui/material";

export default function TarjetaParaSolicitudEntrante() {
  return (
    <Stack direction={"row"} spacing={"16px"} padding={"16px"} alignItems={"center"}>
      <Avatar style={{ backgroundColor: "#03045E", color: "#FAFDFD" }}>
        <Typography style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: 600 }}>
          PG
        </Typography>
      </Avatar>
      <Box>
        <Typography gutterBottom component="h5" style={{ color: "#000000", fontFamily: "Roboto", fontSize: "16px", fontWeight: 600 }} >
          Solicitud entrante
        </Typography>
        <Typography component="p" style={{ color: "#000000", fontFamily: "Roboto", fontSize: "14px", fontWeight: 400 }} >
          Pamela Gionco hizo un pedido y fue aprobado por Jose Albornoz
        </Typography>
      </Box>
    </Stack>

  );
}
