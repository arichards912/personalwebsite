// @ts-check
const { test, expect } = require('@playwright/test');
const localhost = 'http://localhost:3000';

test('navigates to the portfolio page', async ({ page }) => {
    await page.goto(localhost);
    await page.click('a[href="/portfolio"]');
    const title = await page.textContent('h2.section-title');
    expect(title).toBe('Portfolio');
  });