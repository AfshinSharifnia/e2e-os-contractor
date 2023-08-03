import { test, expect } from "@playwright/test";
import { contractorProfile } from "../pages/contractorProfile";
import { LoginPage } from "../pages/logIn";

//Contractor profile
test("contractor profile", async ({ page }) => {
  const contProfile = new contractorProfile(page);

  const testLogin = new LoginPage(page);

  await testLogin.gotoLoginPage();

  await testLogin.login("cont1@test.com", "Cont2023$");

  await contProfile.editProfileContractor(
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H"
  );
});

//Recruiter profile
test("Recruiter profile", async ({ page }) => {
  const recProfile = new contractorProfile(page);
  const testLogin = new LoginPage(page);

  await testLogin.gotoLoginPage();

  await testLogin.login("rec1@test.com", "Rec2023$");

  await page.locator("[tabindex='0']").click();
  await page.waitForTimeout(8000);
  // await page.locator('xpath=//*[@id="account-menu"]/div[3]/ul/li[2]').click();
  // await page.locator("[name='firstName']").fill("Contractor1-Name");
  // await page.locator("[name='lastName']").fill("Contractor1-LastName");
  // await page.locator("[name='email']").fill("TestEmail@test.com");
  // await page.locator("[name='qualification']").fill("Test-Qualification");
  // await page.locator("[name='linkedinUrl']").fill("Test-LinkedIn");
  // await page.locator("[name='companyName']").fill("Test-companyname");
  // await page.locator("[name='companyInfo']").fill("Test-About Us");
  // await page
  //   .locator("#root > div.updateForm.flexCenter > form > button > span")
  //   .click();
  // await page
  //   .locator(
  //     "[class='MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-1j16qob']"
  //   )
  //   .click();
  // await page.locator("text='Logout'").click();
});
