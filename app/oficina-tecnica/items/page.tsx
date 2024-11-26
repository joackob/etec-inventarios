import * as React from "react";
import db from "@/db";
import TarjetaParaUnLogoEtec from "./componentes/tarjeta-logoetec";
import TarjetaParaDescripcionItem from "./componentes/tarjeta-descripcion-item";
//import ContenedorParaItems from "./componentes/contenedor-tarjetas-item";

export default async function Page({}) {
  return (
    <>
      <TarjetaParaUnLogoEtec />
      <TarjetaParaDescripcionItem />
    </>
  );
}
