import bcrypt from "bcrypt";
import { Usuarios } from "@prisma/client";
import { DatosNecesariosParaIniciarLaSesionDeUnUsuario } from "../iniciar-sesion/parser";
import { encontrarAUnUsuarioPorSuEmail } from "./repo";

export const autenticarLosDatosDeUnUsuario = async (
  datos: DatosNecesariosParaIniciarLaSesionDeUnUsuario
): Promise<Usuarios> => {
  const usuario = await encontrarAUnUsuarioPorSuEmail(datos.email);
  await chequearContrasenas({
    contrasenaDeLaSolicitud: datos.password,
    contrasenaDelUsuario: usuario.password,
  });
  return usuario;
};

const chequearContrasenas = async ({
  contrasenaDelUsuario,
  contrasenaDeLaSolicitud,
}: {
  contrasenaDelUsuario: string;
  contrasenaDeLaSolicitud: string;
}): Promise<void> => {
  try {
    const lasContraseniasCoinciden = await bcrypt.compare(
      contrasenaDeLaSolicitud,
      contrasenaDelUsuario
    );
    if (!lasContraseniasCoinciden) {
      throw new Error("Usuario o contraseña incorrectos");
    }
  } catch (error) {
    throw new Error(
      "El servicio para el chequeo de la password no se encuentra disponible"
    );
  }
};
