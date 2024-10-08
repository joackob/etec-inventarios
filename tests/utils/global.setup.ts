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
  } catch (error) {
    console.log("no se pudo registrar el usuario");
  }
};

export default inicializarBaseDeDatos;
