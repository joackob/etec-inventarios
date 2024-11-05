import * as React from "react";
import db from "@/db";
import SolicitudEntrante from "./componentes/solicitud-entrante-ofitec";
import TarjetaParaEquipoSolicitados from "./componentes/tarjeta-para-equipo-solicitados";
import TarjetaParaEquipoSinExistencias from "./componentes/tarjeta-para-equipo-sin-existencias";
import TarjetaParaLogoEtec from "./componentes/tarjeta-logoetec";
import ContenedorParaLaSolicitud from "./componentes/contenedor-para-la-solicitud";
import { obtenerSolicitud } from "./repositorio";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const solicitud = await obtenerSolicitud(id);

  return (
    <ContenedorParaLaSolicitud>
      <TarjetaParaLogoEtec />
      <SolicitudEntrante solicitante={solicitud.solicitante} />
      <TarjetaParaEquipoSolicitados
        items={solicitud.items.map((item) => {
          return {
            descripcion: item.descripcion,
            unidades: item.unidades,
          };
        })}
      />
      {/* necesito los items(descripcion, cantidad) y si el item esta disponible*/}
      <TarjetaParaEquipoSinExistencias />
    </ContenedorParaLaSolicitud>
  );
}
