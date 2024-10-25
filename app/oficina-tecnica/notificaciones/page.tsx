import { Paper, Stack, Typography } from "@mui/material";
import TarjetaParaSolicitudEntrante from "./componentes/tarjeta-para-solicitud-entrante";
import { obtenerNotificaciones } from "./repo";

const Page = async () => {
  const notificaciones = await obtenerNotificaciones();

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
          {notificaciones.map((notificacion) => {
            return (
              <TarjetaParaSolicitudEntrante
                key={notificacion.id}
                iniciales={
                  notificacion.solicitante.nombre[0] +
                  notificacion.solicitante.apellido[0]
                }
                solicitante={
                  notificacion.solicitante.nombre +
                  " " +
                  notificacion.solicitante.apellido
                }
              />
            );
          })}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Page;
