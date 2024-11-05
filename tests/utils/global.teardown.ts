import db from "@/db";

export const limpiarBaseDeDatos = async () => {
  await eliminarLosItemsEnSolicitud();
  await eliminarTodasLasSolicitudes();
  await eliminarTodosLosItems();
  await eliminarTodasLasUbicaciones();
  await eliminarTodosLosUsuarios();
  await eliminarTodosLosItemsAComprar();
};

const eliminarTodosLosUsuarios = async () => {
  try {
    await db.usuarios.deleteMany();
  } catch (error) {
    console.log("no se pudieron eliminar los usuarios");
  }
};

const eliminarTodasLasSolicitudes = async () => {
  try {
    await db.solicitudes.deleteMany();
  } catch (error) {
    console.log("no se pudieron eliminar las solicitudes");
  }
};

const eliminarTodosLosItems = async () => {
  try {
    await db.items.deleteMany();
  } catch (error) {
    console.log("no se pudieron eliminar los items");
  }
};
const eliminarTodasLasUbicaciones = async () => {
  try {
    await db.ubicaciones.deleteMany();
  } catch (error) {
    console.log("no se pudieron eliminar las ubicaciones");
  }
};
const eliminarLosItemsEnSolicitud = async () => {
  try {
    await db.itemsEnSolicitud.deleteMany();
  } catch (error) {
    console.log("no se pudieron eliminar las ubicaciones");
  }
};

const eliminarTodosLosItemsAComprar = async () => {
  try {
    await db.itemsAComprar.deleteMany();
  } catch (error) {
    console.log("no se pudieron eliminar los items");
  }
};

export default limpiarBaseDeDatos;
