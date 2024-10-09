import { cookies } from "next/headers";
import { CredencialesParaLaSesionDeUnUsuario } from "../crear-credenciales";

export const setearCredecialesEnLaSesionDelUsuario = (
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
