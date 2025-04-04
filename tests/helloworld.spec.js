// @ts-check
const website = 'https://eval.hogrefe-ws.com/HTSPrerelease/main#';
const username = 'user';
const password = 'pw';

import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('hello world', async ({ page }) => {
    await page.goto(website);

    const  var_ilocator = page.getByRole('textbox', {name: 'login'});
    await expect(var_ilocator.isVisible().then(async ()=>{
      console.log("hello!");
  }));
  });