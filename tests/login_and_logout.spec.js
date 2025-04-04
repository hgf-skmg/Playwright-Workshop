// @ts-check
import { test, expect } from '@playwright/test';


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
    div.style.backgroundColor = 'yellow';
  });

  await page.waitForTimeout(2000);

  await expect(displayText).toHaveText("Evaluation - Prerelease");

  const splitButtonMenu = page.locator('#splitButtonMenu button');
  
  await expect(splitButtonMenu).toBeVisible();

  await splitButtonMenu.click();

  await page.waitForTimeout(1000);

  const yesButton = page.locator('button', { hasText: 'Yes' });

  await expect(yesButton).toBeVisible();

  await page.waitForTimeout(1000);

  await yesButton.click()

});