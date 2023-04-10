// @ts-check
const { test, expect } = require('@playwright/test');
const localhost = 'http://localhost:3000';

// Check that the local host page loads
test('loads the landing page', async ({ page }) => {
  await page.goto(localhost);
  const title = await page.textContent('h1');
  expect(title).toBe('Alexander Richards - Software Engineer');
});

// Check that the vanta background is visible by checking the state 
// of the background div
test('landing page vanta background', async ({ page }) => {
    await page.goto(localhost);
    expect(await page.isVisible('.landing-bg')).toBe(true);
});

// Check that the paragraph div loads
test('landing page paragraph', async ({ page }) => {
    await page.goto(localhost);
    expect(await page.isVisible('.intro-text')).toBe(true);
});

// Check that the page loads and can't scroll
test('landing page scroll', async ({ page }) => {
    await page.goto(localhost);
    expect(await page.isVisible('.landing-bg')).toBe(true);
    await page.evaluate(() => window.scrollTo(0, 100));
    // expect that window.scrollY is equal to the Y after the navbar (35 is static for navbar height)
    expect(await page.evaluate(() => window.scrollY)).toBe(35);
});