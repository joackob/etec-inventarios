import { test, expect } from "@playwright/test";
test.describe("Como usuario, quiero incribirme en el sistema para obtener una cuenta particular", () => {
  test("Si se rellenan adecuadamente, todos los campos requeridos, el sistema me redirige sing-in", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/auth/sign-up");
    await page.getByPlaceholder("Nombre").click();
    await page.getByPlaceholder("Nombre").fill("Jhon");
    await page.getByPlaceholder("Apellido").click();
    await page.getByPlaceholder("Apellido").fill("Doe");
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill("jdoe@gmail.com");
    await page.getByPlaceholder("Contraseña", { exact: true }).click();
    await page.getByPlaceholder("Contraseña", { exact: true }).fill("123");
    await page.getByPlaceholder("Repetir contraseña").click();
    await page.getByPlaceholder("Repetir contraseña").fill("123");
    await page.getByRole("button", { name: "continuar" }).click();
    await expect(page).toHaveURL("http://localhost:3000/auth/sign-in");
  });
});
