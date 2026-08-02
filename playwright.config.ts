import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  testDir: './tests',
  use: {
    browserName: 'chromium',
    headless: true,
    launchOptions: {
      slowMo: 1000         // 1 second delay between actions
    },
    screenshot: 'on',
    video: 'retain-on-failure',
    trace:'on'
  }
});
