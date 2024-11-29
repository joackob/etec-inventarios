import Box from "@mui/material/Box";
import SubirArchivos from "./subirArchivos"; 
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function TarjetaParaCargaDeDatos() {
  return (
    <Stack
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
          
          Cargue su archivo aquí (.xlsx)
        </Typography>

        <Box display="flex" width="100%">
          <Box ml={3}> 
          <SubirArchivos />
          </Box>
        </Box>
   
      </Box>
    </Stack>
  );
}
