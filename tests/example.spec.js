// @ts-check
import { test, expect } from '@playwright/test';

/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  await page.waitForTimeout(3000);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  await page.waitForTimeout(3000)
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/

test('open Prerelease, check for inputs and the login', async ({ page }) => {
  

  
  await page.goto('https://eval.hogrefe-ws.com/HTSPrerelease/main#');

  await page.waitForTimeout(1000);

  const serialField = page.locator('input[name="login"]');
  const passwordField = page.locator('input[name="password"]');
  const submitButton = page.getByRole('button', { name: 'Log In' });

  await expect(serialField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(submitButton).toBeVisible();

  await serialField.fill("565203040a");
  await passwordField.fill("DeJ2nYX31");
  
  await page.waitForTimeout(1000);

  await submitButton.click();

  await page.waitForTimeout(3000);

  const displayText = page.locator('.display-warning');

  await expect(displayText).toBeVisible();
  
  await displayText.evaluate((div) => {
    div.style.backgroundColor = 'yellow'; // Hintergrundfarbe ändern
  });

  await page.waitForTimeout(2000);

  await expect(displayText).toHaveText("Evaluation - Prerelease");

  const splitButtonMenu = page.locator('#splitButtonMenu button');
  //const splitButtonMenu = page.locator('[id^="splitButtonMenuDiv"]');

  await expect(splitButtonMenu).toBeVisible();

  await splitButtonMenu.click();

  await page.waitForTimeout(1000);

  const yesButton = page.locator('button', { hasText: 'Yes' });

  await expect(yesButton).toBeVisible();

  await page.waitForTimeout(1000);

  await yesButton.click()

});