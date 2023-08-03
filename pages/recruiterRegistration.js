export class recruiterRegistration {
  constructor(page) {
    this.page = page;
    this.loginorsignUp_button = page.locator("text='Log In Or Sign Up'");
    this.register_button = page.locator("text='Register'");
    this.recruiter_radio = page.locator("[value='recruiter']");
    this.recruiterEmail = page.locator("#emailInput");
    this.recruiterDisplayname = page.locator("[placeholder='DisplayName...']");
    this.recruiterPassword = page.locator("[placeholder='Password...']");
    this.createUser_button = page.locator("text ='Create User'");
  }

  //methods
  async gotoLoginPage() {
    await this.page.goto("https://os-project-black.vercel.app/");

    await this.loginorsignUp_button.click();
  }

  async recRegister(recEmail, recdisplayname, recPassword) {
    await this.register_button.click();
    await this.recruiter_radio.click();
    await this.recruiterEmail.fill(recEmail);
    await this.recruiterDisplayname.fill(recdisplayname);
    await this.recruiterPassword.fill(recPassword);
    await this.createUser_button.click();
  }
}
