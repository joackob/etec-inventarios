import { Paper, Stack, Typography, Box } from "@mui/material";
import TarjetaParaCargaDeDatos from "./componentes/tarjetaParaCargaDeDatos"; 
import TarjetaParaUnLogoEtec from "./componentes/tarjeta-logoetec";

const Page = async () => {
  return (
    <Paper
      elevation={8}
      style={{
        backgroundColor: "#FFFFFF",
        padding: " 8px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <TarjetaParaUnLogoEtec />
      
  
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        flexDirection="column" 
        sx={{ marginTop: "16px" }}
      >
        <Typography
          style={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: 600,
            marginBottom: "20px", 
            
          }}
        >
        
    
        </Typography>
        
   
       
            <TarjetaParaCargaDeDatos /> 
       
     
          </Box>
    </Paper>
  );
};

export default Page;
