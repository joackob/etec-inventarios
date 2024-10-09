import { test, expect } from "@playwright/test";

test.describe("Como usuario, deseo ingresar al sistema mediante mi usuario y contraseña para operar con el mismo", () => {
  test("Si el usuario ingresado en el formulario no existe, deberia mostrarse el mensaje", async ({
    page,
  }) => {
    await page.goto("/usuarios/iniciar-sesion");
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill("usuario@noregistrado.com.ar");
    await page.getByPlaceholder("Contraseña").click();
    await page.getByPlaceholder("Contraseña").fill("contrasena");
    await page.getByRole("button", { name: "continuar" }).click();
    await expect(
      page.getByText("El email o la contraseña ingresada no son correctos"),
    ).toBeVisible();
  });
});
