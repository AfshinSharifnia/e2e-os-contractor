import { test, expect } from "@playwright/test";
//Contractor profile
test.only("contractor profile", async ({ page }) => {
  await page.goto("https://os-project-black.vercel.app/contractorlist");
  await expect(page).toHaveURL(
    "https://os-project-black.vercel.app/contractorlist"
  );
  await page.locator("text='Log in'").click();
  await page.locator("#emailInput").fill("cont1@test.com");
  await page.locator("[placeholder='Password...']").fill("Cont2023$");
  await page.locator("text='Login'").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".image_container").click();
  await page.locator("text='My Profile'").click();
  await page.locator(".image_container").click();
  await page.locator("text='Edit My Profile'").click();
  await page.locator("[name='firstName']").fill("John");
  await page.locator("[name='lastName']").fill("Doe");
  await page.locator("[name='qualification']").fill("Project Manager");
  await page.locator("[name='linkedinUrl']").fill("myLinkedIn");
  await page.locator("[name='githubUrl']").fill("myGitHub");
  await page.locator("[name='summary']").fill("mySummary");
  await page.locator("[name='projectName-0']").fill("myProject1");
  await page.locator("[name='description-0']").fill("myProject1-Description");
  await page.locator("text='Save'").click();
  await page.locator('xpath=//*[@id="root"]/div[1]/ul/button').click();
  await page.locator('xpath=//*[@id="account-menu"]/div[3]/ul/li[3]').click();
  await page.locator("[href='/About'  ]").click();
  await page.locator("[href='/search'  ]").click();
  await page.locator("[href='/contractorList'  ]").click();
  await page.locator("[class='image_container']").click();
  await page.locator("text='Logout'").click();
});

//Recruiter profile
test("Recruiter profile", async ({ page }) => {
  await page.goto("https://os-project-black.vercel.app/contractorlist");
  await expect(page).toHaveURL(
    "https://os-project-black.vercel.app/contractorlist"
  );

  await page.locator("text='Log in'").click();
  await page.locator("#emailInput").fill("rec1@test.com");
  await page.locator("[placeholder='Password...']").fill("Rec2023$");
  await page.locator("text='Login'").click();
  await page.waitForLoadState("networkidle");
  await page.locator("[tabindex='0']").click();
  await page.locator('xpath=//*[@id="account-menu"]/div[3]/ul/li[2]').click();
  await page.locator("[name='firstName']").fill("Contractor1-Name");
  await page.locator("[name='lastName']").fill("Contractor1-LastName");
  await page.locator("[name='email']").fill("TestEmail@test.com");
  await page.locator("[name='qualification']").fill("Test-Qualification");
  await page.locator("[name='linkedinUrl']").fill("Test-LinkedIn");
  await page.locator("[name='companyName']").fill("Test-companyname");
  await page.locator("[name='companyInfo']").fill("Test-About Us");
  await page
    .locator("#root > div.updateForm.flexCenter > form > button > span")
    .click();
  await page
    .locator(
      "[class='MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-1j16qob']"
    )
    .click();
  await page.pause();
  await page.locator("text='Logout'").click();
});
