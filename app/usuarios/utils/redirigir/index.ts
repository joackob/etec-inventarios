import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const redirigirALaSeccionDeNotificaciones = () => {
  revalidatePath("/");
  redirect("/");
};
