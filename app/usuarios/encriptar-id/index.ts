import { SignJWT } from "jose";

const secret = process.env.JWT_SECRET ?? "secret";
const secretKey = new TextEncoder().encode(secret);

export const encriptarIDDeUsuario = async (id: string): Promise<string> => {
  try {
    const signJWT = new SignJWT({ id });
    signJWT.setProtectedHeader({ alg: "HS256" });
    signJWT.setIssuedAt();
    signJWT.setIssuer("auth");
    signJWT.setAudience("auth");
    signJWT.setExpirationTime("1h");
    return await signJWT.sign(secretKey);
  } catch (error) {
    throw new Error("Error al crear credenciales");
  }
};
