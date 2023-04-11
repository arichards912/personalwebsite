// @ts-check
const { test, expect } = require('@playwright/test');
const localhost = 'http://localhost:3000';

test('navigates to the resume page', async ({ page }) => {
    await page.goto(localhost);
    await page.goto(localhost + '/resume')
    const title = await page.textContent('h2.section-title');
    expect(title).toBe('Resume Timeline');
  });

test('download resume', async ({ page }) => {
    await page.goto(localhost);
    await page.goto(localhost + '/resume')
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('a.download-button')
    ]);
    expect(download.suggestedFilename()).toBe('RichardsResume.pdf');
});
