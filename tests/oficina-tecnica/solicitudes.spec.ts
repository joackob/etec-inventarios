import { test, expect } from '@playwright/test';

test.describe("historia usuario", () => {
    test('test', async ({ page }) => {
        await page.goto('http://localhost:3000/oficina-tecnica/solicitudes/');
        await expect(page.getByText('Pamela Gionco hizo un pedido')).toBeVisible();
        await expect(page.getByTestId)
    });
})
