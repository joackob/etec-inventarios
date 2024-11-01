import * as React from "react";
import db from "@/db";
import SolicitudEntrante from "./componentes/solicitud-entrante-ofitec";
import TarjetaParaEquipoSolicitados from "./componentes/tarjeta-para-equipo-solicitados";
import TarjetaParaEquipoSinExistencias from "./componentes/tarjeta-para-equipo-sin-existencias";
import TarjetaParaLogoEtec from "./componentes/tarjeta-logoetec";
import ContenedorParaLaSolicitud from "./componentes/contenedor-para-la-solicitud";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const solicitud = await db.solicitudes.findUniqueOrThrow({
    where: { id: id },
    select: {
      solicitante: { select: { nombre: true } },
      items: {
        select: { item: { select: { descripcion: true } }, cantidad: true },
      },
    },
  });

  return (
    <ContenedorParaLaSolicitud>
      <TarjetaParaLogoEtec />
      {/* necesito el nombre del solicitante */}
      <SolicitudEntrante descripcion={solicitud.solicitante.nombre} />

      <TarjetaParaEquipoSolicitados
        items={solicitud.items.map((item) => {
          return {
            descripcion: item.item.descripcion,
            unidades: item.cantidad,
          };
        })}
      />
      {/* necesito los items(descripcion, cantidad) y si el item esta disponible*/}
      <TarjetaParaEquipoSinExistencias />
    </ContenedorParaLaSolicitud>
  );
}
