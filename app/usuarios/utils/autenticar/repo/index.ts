import db from "@/db";
import { Usuarios } from "@prisma/client";

export const encontrarAUnUsuarioPorSuEmail = async (
  email: string
): Promise<Usuarios> => {
  try {
    return await db.usuarios.findUniqueOrThrow({ where: { email } });
  } catch (error) {
    throw new Error("Usuario no registrado");
  }
};
