import { test, expect } from '@playwright/test';

test('Attempt quiz and see score', async ({ page }) => {
  await page.goto('https://sandbox.moodledemo.net/login/index.php');
  await page.fill('#username', 'student');
  await page.fill('#password', 'student');
  await page.click('#loginbtn');

  await page.goto('https://sandbox.moodledemo.net/course/view.php?id=2'); // Example course
  await page.click('text=Quiz');
  await page.click('text=Attempt quiz now');
  await page.click('input[type="radio"]'); // select first option
  await page.click('text=Finish attempt');
  await page.click('text=Submit all and finish');
  await expect(page.locator('.grade')).toContainText('Grade');
});
