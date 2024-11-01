import { test, expect } from '@playwright/test';

test.describe("historia usuario", () => {
    test('test', async ({ page }) => {
        await page.goto('http://localhost:3001/oficina-tecnica/solicitudes/asd');
        await expect(page.getByText('Pamela Gionco hizo un pedido')).toBeVisible();
        await expect(page.getByText('destornillador plano')).toBeVisible();
        await expect(page.getByText('1 unidades')).toBeVisible();


    });
})
