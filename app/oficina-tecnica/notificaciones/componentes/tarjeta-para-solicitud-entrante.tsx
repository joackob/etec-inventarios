import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function TarjetaParaSolicitudEntrante({
  iniciales,
  solicitante,
}: {
  iniciales: string;
  solicitante: string;
}) {
  return (
    <Stack
      direction={"row"}
      spacing={"16px"}
      padding={"16px"}
      alignItems={"center"}
    >
      <Avatar style={{ backgroundColor: "#03045E", color: "#FAFDFD" }}>
        <Typography
          style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: 600 }}
        >
          {iniciales}
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
          {solicitante} hizo un pedido
        </Typography>
      </Box>
    </Stack>
  );
}
