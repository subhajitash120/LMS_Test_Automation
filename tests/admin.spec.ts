import { test, expect } from '@playwright/test';

test('Admin adds a new course', async ({ page }) => {
  await page.goto('https://sandbox.moodledemo.net/login/index.php');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'sandbox');
  await page.click('#loginbtn');

  await page.goto('https://sandbox.moodledemo.net/course/management.php');
  await page.click('text=Create new course');
  await page.fill('#id_fullname', 'Playwright Automation Course');
  await page.fill('#id_shortname', 'PAC101');
  await page.click('#id_saveanddisplay');
  await expect(page.locator('.page-header-headings')).toContainText('Playwright Automation Course');
});

test('Admin deletes a course', async ({ page }) => {
  await page.goto('https://sandbox.moodledemo.net/login/index.php');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'sandbox');
  await page.click('#loginbtn');

  await page.goto('https://sandbox.moodledemo.net/course/management.php');
  await page.click('text=Playwright Automation Course');
  await page.click('text=Delete');
  await page.click('button[type="submit"]'); // confirm delete
  await expect(page.locator('.alert-success')).toContainText('Course deleted');
});
