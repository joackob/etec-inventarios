import { test, expect } from "@playwright/test";
test.describe("como representante de O.T quiero recibir todas las notificaciones relacionadas a las solicitudes activas ", () => {
  test("si entro a la seccion de novedades tiene que aparecer la solicitud de el profesor que haya hecho un pedido", async ({
    page,
  }) => {
    await page.goto("/oficina-tecnica/notificaciones");
    await expect(page.getByText("Pamela Gionco hizo un pedido")).toBeVisible();
  });
});
