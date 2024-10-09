import bcrypt from "bcrypt";
import { Usuarios } from "@prisma/client";
import { encontrarAUnUsuarioPorSuEmail } from "./repo";
import {
  ServicioInhabilitado,
  SolicitudSinCredencialesCorrespondientes,
} from "@/app/excepciones";
import { DatosNecesariosParaIniciarLaSesionDeUnUsuario } from "../validar-solicitud";

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
      throw new SolicitudSinCredencialesCorrespondientes(
        "Usuario o contraseña incorrectos"
      );
    }
  } catch (error) {
    throw new ServicioInhabilitado(
      "El servicio para el chequeo de la password no se encuentra disponible"
    );
  }
};
