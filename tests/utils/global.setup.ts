import db from "@/db";
import bcrypt from "bcrypt";
import limpiarBaseDeDatos from "./global.teardown";

export const inicializarBaseDeDatos = async () => {
  await registrarUnUsuarios();
  await registrarUbicaciones();
  await registrarItems();
  await registrarSolicitudes();
  await registrarItemsEnSolicitud();
  return limpiarBaseDeDatos;
};

const registrarUbicaciones = async () => {
  try {
    await db.ubicaciones.create({
      data: {
        id: "aula212",
        tipo: "Entorno",
        piso: "1",
        peine: "2",
        nombre: "212",
      },
    });
    await db.ubicaciones.create({
      data: {
        id: "aula213",
        tipo: "Entorno",
        piso: "1",
        peine: "2",
        nombre: "213",
      },
    });
    await db.ubicaciones.create({
      data: {
        id: "aula214",
        tipo: "Entorno",
        piso: "1",
        peine: "2",
        nombre: "214",
      },
    });
    await db.ubicaciones.create({
      data: {
        id: "aula215",
        tipo: "Entorno",
        piso: "1",
        peine: "2",
        nombre: "215",
      },
    });
  } catch (error) {
    console.log("no se pudo registrar la ubicacion");
  }
};

const registrarItems = async () => {
  try {
    await db.items.create({
      data: {
        id: "destornillador-plano",
        ubicacionId: "aula212",
        descripcion: "destornillador plano",
        marca: "Black and Decker",
        serie: "1",
        unidad: "1",
      },
    });
    await db.items.create({
      data: {
        id: "destornillador-philips",
        ubicacionId: "aula212",
        descripcion: "destornillador philips",
        marca: "Black and Decker",
        serie: "2",
        unidad: "1",
      },
    });
    await db.items.create({
      data: {
        id: "martillo",
        ubicacionId: "aula212",
        descripcion: "martillo",
        marca: "Black and Decker",
        serie: "3",
        unidad: "1",
      },
    });
  } catch (error) {
    console.log(`no se pudo registrar el item: ${error}`);
  }
};

const registrarSolicitudes = async () => {
  try {
    await db.solicitudes.create({
      data: {
        id: "asd",
        solicitanteId: "pame",
        estado: "activo",
      },
    });
    await db.solicitudes.create({
      data: {
        id: "as",
        solicitanteId: "Fede",
        estado: "cerrado",
      },
    });
  } catch (error) {
    console.log("no se pudo registrar la solicitud");
  }
};

const registrarItemsEnSolicitud = async () => {
  try {
    await db.itemsEnSolicitud.create({
      data: {
        itemId: "destornillador-plano",
        cantidad: 1,
        solicitudId: "asd",
      },
    });
    await db.itemsEnSolicitud.create({
      data: {
        itemId: "martillo",
        cantidad: 1,
        solicitudId: "as",
      },
    });
  } catch (error) {
    console.log("no se pudo registrar el item en la solicitud");
  }
};
const registrarUnUsuarios = async () => {
  try {
    await db.usuarios.create({
      data: {
        id: "docente",
        email: "docente@etec.uba.ar",
        password: await bcrypt.hash("passtesting", 10),
        nombre: "Docente",
        apellido: "Etec",
      },
    });
    await db.usuarios.create({
      data: {
        id: "pame",
        email: "pgionco@etec.uba.ar",
        password: await bcrypt.hash("passtesting", 10),
        nombre: "Pamela",
        apellido: "Gionco",
      },
    });
    await db.usuarios.create({
      data: {
        id: "Fede",
        email: "fvillace@etec.uba.ar",
        password: await bcrypt.hash("passtesting", 10),
        nombre: "Federico",
        apellido: "Villace",
      },
    });
  } catch (error) {
    console.log("no se pudo registrar el usuario");
  }
};

export default inicializarBaseDeDatos;
