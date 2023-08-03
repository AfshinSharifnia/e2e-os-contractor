import { test, expect } from "@playwright/test";
import { recruiterRegistration } from "../pages/recruiterRegistration";
import { contractorRegistration } from "../pages/contractorRegistration";

//Recruiter
test("Recruiter Registeration", async ({ page }) => {
  const recRegister = new recruiterRegistration(page);
  await recRegister.gotoLoginPage();
  await recRegister.recRegister("rec6@test.com", "Recruiter6", "Rec2023$");
  await page.waitForTimeout(8000);
});

//Contractor

test("Contractor Registeration", async ({ page }) => {
  const contRegister = new contractorRegistration(page);
  await contRegister.gotoLoginPage();
  await contRegister.contRegister(
    "qa1@test.com",
    "Contractor11",
    "Cont2023"
  );
  await page.waitForTimeout(8000);


});
