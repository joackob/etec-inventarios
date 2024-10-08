import db from "@/db";

export const limpiarBaseDeDatos = async () => {
  await eliminarTodosLosUsuarios();
};

const eliminarTodosLosUsuarios = async () => {
  try {
    await db.usuarios.deleteMany();
  } catch (error) {
    console.log("no se pudieron eliminar los usuarios");
  }
};

export default limpiarBaseDeDatos;
