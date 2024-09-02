import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {
          // fijarse como funciona exactamente este componente
        }
        <Avatar>
          {" "}
          {
            //aca tiene que ir la imagen del mail
          }{" "}
        </Avatar>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Solicitud entrante
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {
              //aca va texto
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
