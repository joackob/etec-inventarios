import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Paper, Stack } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import Button from "@mui/material";
import SendIcon, { Height } from "@mui/icons-material";

export default function TarjetaParaSolicitudEntrante() {
  return (
    <>
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
        </Paper>
        <Paper>
          <Stack
            bgcolor={"#FAFDFD"}
            borderRadius={2}
            direction={"row"}
            spacing={"16px"}
            padding={"16px"}
            alignItems={"center"}
          >
            <Avatar style={{ backgroundColor: "#03045E", color: "#FAFDFD" }}>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                PG
              </Typography>
            </Avatar>
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
                Solicitud entrante
              </Typography>
              <Typography
                component="p"
                style={{
                  color: "#000000",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Pamela Gionco hizo un pedido y fue aprobado por Jose Albornoz
              </Typography>
            </Box>
          </Stack>
        </Paper>
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
            </Box>
          </Stack>
        </Paper>
      </div>
    </>
  );
}
