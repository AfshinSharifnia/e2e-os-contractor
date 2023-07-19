import { test, expect } from "@playwright/test";

test("contractor profile", async ({ page }) => {
  await page.goto("https://os-project-black.vercel.app/contractorlist");
  await expect(page).toHaveURL(
    "https://os-project-black.vercel.app/contractorlist"
  );
  await page.locator("text='Log in'").click();
  await page.locator("#emailInput").fill("cont1@test.com");
  await page.locator("[placeholder='Password...']").fill("Cont2023$");
  await page.locator("text='Login'").click();
  await page.locator(".image_container").click();
  await page.locator("text='My Profile'").click();
  await page.locator(".image_container").click();
  await page.locator("text='Edit My Profile'").click();
  await page.locator("[name='firstName']").fill("myFirstName");
  await page.locator("[name='lastName']").fill("myLastName");
  await page.locator("[name='qualification']").fill("myQualification");
  await page.locator("[name='linkedinUrl']").fill("myLinkedIn");
  await page.locator("[name='githubUrl']").fill("myGitHub");
  await page.locator("[name='summary']").fill("mySummary");
  await page.locator("[name='projectName-0']").fill("myProject1");
  await page.locator("[name='description-0']").fill("myProject1-Description");
  await page.locator("text='Save'").click();

  // await page.locator("[type='file']").click();
  // await page.locator("[type='file']").setInputFiles();
  await page.pause();
});
