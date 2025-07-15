import { test, expect } from '@playwright/test';

test('navbar functionality', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Verifica se a navbar está visível
  await expect(page.locator('#navbar')).toBeVisible();
  await expect(page.locator('#navbar')).toContainText(['Biblioteca']);

  await page.locator('#navbar >> text=Biblioteca').click();

  const libaryCard = page.locator("#navbar >> text=Biblioteca")

  await expect(libaryCard).toHaveText('Possui 0 acessos');

  for (let i = 0; i < 8; i++) {
    await libaryCard.click();
  }

  // Verifica se o contador foi atualizado corretamente
  await expect(libaryCard).toHaveText('Possui 8 acessos');
});