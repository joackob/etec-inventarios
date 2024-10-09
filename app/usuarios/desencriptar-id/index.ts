import { jwtVerify } from "jose";
import { z } from "zod";

export const desencriptarIDDeUsuario = async (
  token: string
): Promise<string> => {
  const clave = obtenerClaveDeEncriptacion();
  return await obtenerIDVerificandoSuAutenticidad({ token, clave });
};

type ClaveDeEncriptacion = ReturnType<typeof obtenerClaveDeEncriptacion>;

const obtenerClaveDeEncriptacion = () => {
  try {
    const parser = z.string();
    const secret = parser.parse(process.env.JWT);
    return new TextEncoder().encode(secret);
  } catch (error) {
    throw new Error(
      "Error al obtener clave de encriptación: No esta definida la variable de entorno JWT"
    );
  }
};

const obtenerIDVerificandoSuAutenticidad = async ({
  token,
  clave,
}: {
  token: string;
  clave: ClaveDeEncriptacion;
}): Promise<string> => {
  try {
    const session = await jwtVerify<{ id: string }>(token, clave);
    return session.payload?.id;
  } catch (error) {
    throw new Error("Error verificar autenticidad de las credenciales");
  }
};
