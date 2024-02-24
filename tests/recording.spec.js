import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  await page.getByRole('search').getByRole('img').first().click();
  await page.goto('https://www.google.com/search?q=playwright&sca_esv=a930a3196aed2650&source=hp&ei=IH_XZe3UBayZkPIPjtmfkAw&iflsig=ANes7DEAAAAAZdeNMNB576B6CiA_de62vIuqUOPCAEfU&ved=0ahUKEwjt5J28t7-EAxWsDEQIHY7sB8IQ4dUDCA8&uact=5&oq=playwright&gs_lp=Egdnd3Mtd2l6IgpwbGF5d3JpZ2h0MgsQABiABBixAxiDATIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMgUQABiABDILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDAUj6qgFQrxVYmi1wAXgAkAEAmAFJoAGXBaoBAjEwuAEDyAEA-AEBqAIKwgIQEC4YAxiPARjlAhjqAhiMA8ICEBAAGAMYjwEY5QIY6gIYjAPCAhQQLhiABBiKBRixAxiDARjHARjRA8ICDhAuGIAEGLEDGMcBGNEDwgIOEAAYgAQYigUYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICDhAuGIAEGIoFGLEDGIMBwgILEC4YgAQYxwEY0QPCAg4QLhiABBjHARivARiOBcICCxAuGIAEGLEDGOUEwgILEAAYgAQYigUYkgPCAggQABiABBjJA8ICCBAuGIAEGLEDwgIOEC4YgwEYsQMYgAQYigXCAg4QLhiABBixAxjHARivAQ&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
});