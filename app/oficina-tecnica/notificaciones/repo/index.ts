import db from "@/db";

export const obtenerNotificaciones = async () => {
  try {
    const notificaciones = await db.solicitudes.findMany({
      select: {
        id: true,
        solicitante: { select: { nombre: true, apellido: true } },
      },
    });
    return notificaciones;
  } catch (error) {
    throw new Error("No se pudieron obtener las notificaciones");
  }
};
