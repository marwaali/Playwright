import { test, expect } from '@playwright/test';
import { myAccountPage } from '../pages/myAccountsPage';
import { homePage } from '../pages/homePage';

test('login with valid user', async ({ page }) => {
  await page.goto('https://practice.automationtesting.in/my-account/');

  let myAccount = new myAccountPage(page)
  await myAccount.login("marwabasuony@gmail.com","Test!123456712")

  let home = new homePage(page)
  expect(await home.isUserLoggedInSuccessfully() ).toBe(true)



});