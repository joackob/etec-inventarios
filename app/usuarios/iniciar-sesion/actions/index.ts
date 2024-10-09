"use server";
import { autenticarLosDatosDeUnUsuario } from "@/app/usuarios/utils/autenticar";
import { validarLosDatosDeLaSolicitud } from "../../utils/validar-solicitud";
import { crearCreadencialesParaSuSesion } from "@/app/usuarios/utils/crear-credenciales";
import { tratarExcepciones } from "@/app/excepciones";
import { setearCredecialesEnLaSesionDelUsuario } from "@/app/usuarios/utils/setear-credenciales";
import { redirigirALaSeccionDeNotificaciones } from "@/app/usuarios/utils/redirigir";

export const intentarIniciarLaSesionDeUnUsuario = async (solicitud: any) => {
  try {
    await iniciarLaSesionDeUnUsuario(solicitud);
  } catch (error) {
    return tratarLasExcepcionesAlIniciarLaSesionDeUnUsuario(error);
  }
  redirigirALaSeccionDeNotificaciones();
};

const iniciarLaSesionDeUnUsuario = async (solicitud: any) => {
  const datos = validarLosDatosDeLaSolicitud(solicitud);
  const usuario = await autenticarLosDatosDeUnUsuario(datos);
  const credenciales = await crearCreadencialesParaSuSesion(usuario);
  setearCredecialesEnLaSesionDelUsuario(credenciales);
};

const tratarLasExcepcionesAlIniciarLaSesionDeUnUsuario = (error: unknown) =>
  tratarExcepciones(error);
