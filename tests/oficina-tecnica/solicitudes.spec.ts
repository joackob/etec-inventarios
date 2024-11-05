import { test, expect } from "@playwright/test";

test.describe("Como solicitante quiero ver mi solicitud", () => {
  test("Deberia mostrar una solicitud de Pamela Gionco, pidiendo un destornillador", async ({
    page,
  }) => {
    await page.goto("/oficina-tecnica/solicitudes/asd");
    await expect(page.getByText("Pamela Gionco hizo un pedido")).toBeVisible();
    await expect(page.getByText("destornillador plano")).toBeVisible();
    await expect(page.getByText("1 unidades")).toBeVisible();
  });
});
test.describe("Quiero ver mi solicitud", () => {
  test("Deberia mostrar una solicitud de Pamela Gioncos pidiendo la compra de un item inexistente", async ({
    page,
  }) => {
    await page.goto("/oficina-tecnica/solicitudes/asd");
    await expect(page.getByText("Pamela Gionco hizo un pedido")).toBeVisible();
    await expect(page.getByText("cerrucho")).toBeVisible();
    await expect(page.getByText("1 unidades")).toBeVisible();
  });
});
