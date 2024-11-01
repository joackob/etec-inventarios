import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function specsObject({
    nombre,
    disponibles,
    enUso,
  }: {
    nombre: string;
    disponibles: number;
    enUso: number;
  }){
    return(
        <Box 
        sx={{backgroundColor: "#FAFDFD", borderRadius: "8px"}}>
            <Box>
        <Typography>
            {nombre}
        </Typography>
        <Typography>
            {disponibles} unidades disponibles, {enUso} en uso.
        </Typography>
            </Box>
            
        </Box>
    )
  }