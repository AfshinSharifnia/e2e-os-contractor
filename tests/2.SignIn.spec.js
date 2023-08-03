import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/logIn";

//Recruiter
test("SignIn Recruiter", async ({ page }) => {
  const testLogin = new LoginPage(page);

  await testLogin.gotoLoginPage();

  await testLogin.login("rec1@test.com", "Rec2023$");

  await page.waitForTimeout(8000);
});

//Contractor
test("SignIn Contractor", async ({ page }) => {
  const testLogin = new LoginPage(page);

  await testLogin.gotoLoginPage();

  await testLogin.login("cont1@test.com", "Cont2023$");

  await page.waitForTimeout(8000);
});
