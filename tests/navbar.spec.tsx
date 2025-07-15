import { test, expect } from '@playwright/test';

test('navbar functionality', async ({ page }) => {
  //acessando aplicação
  await page.goto('http://localhost:5173/');

  //verificando navbar e navegando até a seção de biblioteca
  await expect(page.locator('#navbar')).toBeVisible();
  await expect(page.locator('#navbar')).toContainText(['Biblioteca']);

  await page.locator('#navbar >> text=Biblioteca').click();

  const libaryCard = page.locator("#cuidados-stoma")

  await expect(libaryCard).toContainText('Possui 0 acessos');

  //executando oito cliques no card selecionado
  for (let i = 0; i < 8; i++) {
    await libaryCard.click();
  }

  //verificando se ação foi refletida
  await expect(libaryCard).toContainText('Possui 8 acessos');
});