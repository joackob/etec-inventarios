import db from "@/db";

export const obtenerSolicitud = async (
  id: string
): Promise<{
  solicitante: string;
  items: { descripcion: string; unidades: number }[];
}> => {
  const solicitud = await db.solicitudes.findUniqueOrThrow({
    where: { id: id },
    select: {
      solicitante: { select: { nombre: true, apellido: true } },
      items: {
        select: { item: { select: { descripcion: true } }, cantidad: true },
      },
    },
  });

  return {
    solicitante: `${solicitud.solicitante.nombre} ${solicitud.solicitante.apellido}`,
    items: solicitud.items.map((item) => {
      return {
        descripcion: item.item.descripcion,
        unidades: item.cantidad,
      };
    }),
  };
};
