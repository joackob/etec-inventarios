import * as React from "react";
import SolicitudEntrante from "./componentes/solicitud-entrante-ofitec";
import TarjetaParaEquipoSolicitados from "./componentes/tarjeta-para-equipo-solicitados";
import TarjetaParaEquipoSinExistencias from "./componentes/tarjeta-para-equipo-sin-existencias";
import TarjetaParaLogoEtec from "./componentes/tarjeta-logoetec";
import ContenedorParaLaSolicitud from "./componentes/contenedor-para-la-solicitud";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <ContenedorParaLaSolicitud>
      <TarjetaParaLogoEtec />
      <SolicitudEntrante />
      <TarjetaParaEquipoSolicitados />
      <TarjetaParaEquipoSinExistencias />
    </ContenedorParaLaSolicitud>
  );
}
