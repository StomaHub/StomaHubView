import { test, expect } from '@playwright/test';

test('login com sucesso redireciona para /user', async ({ page }) => {
  // Acessa a página de login
  await page.goto('http://localhost:5173/login');

  // Preenche o e-mail e senha
  await page.fill('input[type="email"]', 'usuario@exemplo.com');
  await page.fill('input[type="password"]', 'senha123');

  // Clica no botão Entrar e redireciona para a página de usuário
  await page.click('text=Entrar');

  await page.waitForURL('**/user');
  expect(page.url()).toContain('/user');

  // Verifica se o e-mail do usuário aparece na tela (baseado no context que você está setando com `setName`)
  await expect(page.locator('text=usuario@exemplo.com')).toBeVisible();
});
