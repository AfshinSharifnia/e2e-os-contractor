import { test, expect } from "@playwright/test";

//Recruiter
test("Recruiter Registeration", async ({ page }) => {
  await page.goto("https://os-project-black.vercel.app/");
  await expect.soft(page).toHaveURL("https://os-project-black.vercel.app/");
  await expect.soft(page).toHaveTitle("Contractor DB");
  await page.locator("text='Log In Or Sign Up'").click();
  await page.locator("text='Register'").click();
  await page.locator("[value='recruiter']").click();
  await page.locator("#emailInput").fill("rec1@test.com");
  await page.locator("[placeholder='DisplayName...']").fill("Recruiter1");
  await page.locator("[placeholder='Password...']").fill("Rec2023$");
  await page.locator("text ='Create User'").click();
});

//Contractor

test("Contractor Registeration", async ({ page }) => {
  await page.goto("https://os-project-black.vercel.app/");
  await expect(page).toHaveURL("https://os-project-black.vercel.app/");
  await expect(page).toHaveTitle("Contractor DB");
  await page.locator("text='Log In Or Sign Up'").click();
  await page.locator("text='Register'").click();
  await page.locator("[value='techs']").click();
  await page.locator("#emailInput").fill("cont1@test.com");
  await page.locator("[name='displayName']").fill("Contractor1");
  await page.locator("[type='password']").fill("Cont2023$");
  await page.locator("text='Create User'").click();

  console.log(await page.title());
  console.log(await page.url());
});
