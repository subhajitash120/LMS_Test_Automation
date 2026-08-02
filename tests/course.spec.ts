import { test, expect } from '@playwright/test';

test('Search for a course', async ({ page }) => {
  await page.goto('https://sandbox.moodledemo.net/course/index.php');
  await page.fill('input[name="search"]', 'Math');
  await page.press('input[name="search"]', 'Enter');
  await expect(page.locator('.coursebox')).toContainText('Math');
});

test('Enroll in a course', async ({ page }) => {
  await page.goto('https://sandbox.moodledemo.net/course/index.php');
  await page.click('text=Mount Orange School');
  await page.click('text=Enrol me');
  await expect(page.locator('.page-header-headings')).toContainText('Mount Orange School');
});
