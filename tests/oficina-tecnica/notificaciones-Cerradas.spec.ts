import { test, expect } from "@playwright/test";
test.describe("como representante de O.T quiero que las solicitudes cerradas no aparezcan en el inicio ", () => {
  test("si entro a la seccion de novedades la solicitud cerrada no deberia ", async ({
    page,
  }) => {
    await page.goto("/oficina-tecnica/notificaciones");
    await expect(
      page.getByText("Federico Villace hizo un pedido")
    ).toBeHidden();
  });
});
