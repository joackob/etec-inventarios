"use server";
import { redirect } from "next/navigation";
import { autenticarLosDatosDeUnUsuario } from "@/app/usuarios/autenticar";
import { validarLosDatosDeLaSolicitud } from "../parser";
import {
  crearCreadencialesParaSuSesion,
  CredencialesParaLaSesionDeUnUsuario,
} from "@/app/usuarios/crear-credenciales";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const intentarIniciarLaSesionDeUnUsuario = async (
  _: any,
  solicitud: FormData,
) => {
  try {
    await iniciarLaSesionDeUnUsuario(solicitud);
  } catch (error) {
    return tratarLasExcepcionesAlIniciarLaSesionDeUnUsuario(error);
  }
  irALaSeccionPrincipal();
};

const iniciarLaSesionDeUnUsuario = async (solicitud: FormData) => {
  const datos = validarLosDatosDeLaSolicitud(solicitud);
  const usuario = await autenticarLosDatosDeUnUsuario(datos);
  const credenciales = await crearCreadencialesParaSuSesion(usuario);
  setearCredecialesEnLaSesionDelUsuario(credenciales);
};

const setearCredecialesEnLaSesionDelUsuario = (
  credenciales: CredencialesParaLaSesionDeUnUsuario,
) => {
  cookies().set("Autorizacion", credenciales.token, {
    name: "session",
    value: credenciales.token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  });
};

const irALaSeccionPrincipal = () => {
  revalidatePath("/");
  redirect("/");
};

const tratarLasExcepcionesAlIniciarLaSesionDeUnUsuario = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  return "Orden de iniciar sesión no pudo ser procesada";
};
