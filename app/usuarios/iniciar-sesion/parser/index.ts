import z, { ZodError } from "zod";

export const validarLosDatosDeLaSolicitud = (
  solicitud: FormData
): DatosNecesariosParaIniciarLaSesionDeUnUsuario => {
  return chequearEsquemaDeLaSolicitud(solicitud);
};

const chequearEsquemaDeLaSolicitud = (
  datos: FormData
): DatosNecesariosParaIniciarLaSesionDeUnUsuario => {
  try {
    return EsquemaDeUnaSolicitudParaIniciarLaSesionDeUnUsuario.parse({
      email: datos.get("email"),
      password: datos.get("password"),
    });
  } catch (error) {
    const primerErrorEncontrado = (error as ZodError).issues.at(0);
    throw new Error(
      `El campo ${primerErrorEncontrado?.path.at(
        0
      )} no se encuentra en el formato correcto: ${
        primerErrorEncontrado?.message
      }`
    );
  }
};

export const EsquemaDeUnaSolicitudParaIniciarLaSesionDeUnUsuario = z.object(
  {
    email: z
      .string()
      .email("Debe existir un email: Por ejemplo jperez@etec.uba.ar"),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
  },
  {
    message:
      "La petición no contiene ninguno de los datos necesarios para ser procesado",
  }
);

export type DatosNecesariosParaIniciarLaSesionDeUnUsuario = z.infer<
  typeof EsquemaDeUnaSolicitudParaIniciarLaSesionDeUnUsuario
>;
