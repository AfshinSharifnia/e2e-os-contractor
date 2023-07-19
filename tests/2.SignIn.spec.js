import { test, expect } from "@playwright/test";

//Recruiter
test("SignIn Recruiter", async ({ page }) => {
  await page.goto("https://os-project-black.vercel.app/");
  await page.locator("text='Log In Or Sign Up'").click();
  await page.locator("#emailInput").fill("rec1@test.com");
  await page.locator("[placeholder='Password...']").fill("Rec2023$");
  await page.locator("text='Login'").click();
});
//Contractor
test("SignIn Contractor", async ({ page }) => {
  await page.goto("https://os-project-black.vercel.app/");
  await page.locator("text='Log In Or Sign Up'").click();
  await page.locator("#emailInput").fill("cont1@test.com");
  await page.locator("[placeholder='Password...']").fill("Cont2023$");
  await page.locator("text='Login'").click();
});
