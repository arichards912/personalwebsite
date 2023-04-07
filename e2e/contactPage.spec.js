// @ts-check
const { test, expect } = require('@playwright/test');
const localhost = 'http://localhost:3000';

test('navigates to the contact page', async ({ page }) => {
    await page.goto(localhost);
    await page.click('a[href="/contact"]');
    const title = await page.textContent('h2.section-title');
    expect(title).toBe('Contact');
});

// Check to see if text can be entered into the contact form boxes and submitted
test('contact form', async ({ page }) => {
    await page.goto(localhost);
    await page.goto(localhost + '/contact')
    await page.fill('input[id="name"]', 'Test Name');
    await page.fill('input[id="email"]', 'testemail@emailhost.com');
    await page.fill('textarea[id="message"]', 'Test Message');
    await page.click('button[id="contact-submit-button"]');
    // TODO Check to see if the form submission was successful 
});


test('contact page social media icons', async ({ page }) => {
await page.goto(localhost);
await page.goto(localhost + '/contact')
const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('a[href="https://www.facebook.com"]')
]);
expect(newPage.url()).toBe('https://www.facebook.com/');
await newPage.close();
const [newPage2] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('a[href="https://twitter.com"]')
]);
expect(newPage2.url()).toBe('https://twitter.com/');
await newPage2.close();
const [newPage3] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('a[href="https://www.instagram.com"]')
]);
expect(newPage3.url()).toBe('https://www.instagram.com/');
await newPage3.close();
const [newPage4] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('a[href="https://www.linkedin.com"]')
]);
expect(newPage4.url()).toBe('https://www.linkedin.com/');
await newPage4.close();
const [newPage5] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('a[href="https://github.com/"]')
]);
expect(newPage5.url()).toBe("https://github.com/");
await newPage5.close();
});

// Navigate to contact page, and see that the embeded Google Maps iframe is visible
test('contact page google maps iframe', async ({ page }) => {
  await page.goto(localhost);
  await page.goto(localhost + '/contact')
  expect(await page.isVisible('iframe')).toBe(true);
});