import db from "@/db";
import bcrypt from "bcrypt";
import limpiarBaseDeDatos from "./global.teardown";

export const inicializarBaseDeDatos = async () => {
  await registrarUnUsuario();
  return limpiarBaseDeDatos;
};

const registrarUnUsuario = async () => {
  try {
    await db.usuarios.create({
      data: {
        email: "docente@etec.uba.ar",
        password: await bcrypt.hash("passtesting", 10),
        nombre: "Docente",
        apellido: "Etec",
      },
    });
    await db.usuarios.create({
      data: {
        email: "pgionco@etec.uba.ar",
        password: await bcrypt.hash("passtesting", 10),
        nombre: "Pamela",
        apellido: "Gionco",
      },
    });

    const pame = await db.usuarios.findUniqueOrThrow({
      where: { email: "pgionco@etec.uba.ar" },
    });
    await db.ubicaciones.create({
      data: {
        tipo: "Entorno",
        piso: "1",
        peine: "2",
        nombre: "212",
      },
    });
    const aula212 = await db.ubicaciones.findUniqueOrThrow({
      where: { nombre: "212" },
    });
    await db.items.create({
      data: {
        ubicacionId: aula212.id,
        descripcion: "destornillador plano",
        marca: "Black and Decker",
        serie: "1",
        unidad: "1",
      },
    });
    const destornillador = await db.items.findUniqueOrThrow({
      where: { serie: "1" },
    });
    await db.solicitudes.create({
      data: { solicitanteId: pame.id, estado: "activo" },
    });
    const solicitud = await db.solicitudes.findFirstOrThrow({
      where: { estado: "activo" },
    });
    await db.itemsEnSolicitud.create({
      data: {
        itemId: destornillador.id,
        cantidad: 1,
        solicitudId: solicitud.id,
      },
    });
  } catch (error) {
    console.log("no se pudo registrar el usuario");
  }
};

export default inicializarBaseDeDatos;
