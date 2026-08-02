import { test, expect } from '@playwright/test';

test('Login with correct student credentials', async ({ page }) => {
  await page.goto('https://sandbox.moodledemo.net/login/index.php');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('sandbox24');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await expect(page).toHaveTitle(/Home/);
});

test('Login with wrong password', async ({ page }) => {
  await page.goto('https://sandbox.moodledemo.net/login/index.php');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('sandbox23');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await expect(page.getByText('Unable to log in')).toContainText('Unable to log in');
});
