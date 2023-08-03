export class contractorRegistration {
  constructor(page) {
    this.page = page;
    this.loginorsignUp_button = page.locator("text='Log In Or Sign Up'");
    this.register_button = page.locator("text='Register'");
    this.contractor_radio = page.locator("[value='techs']");
    this.contractorEmail = page.locator("#emailInput");
    this.contractorDisplayname = page.locator("[placeholder='DisplayName...']");
    this.contractorPassword = page.locator("[placeholder='Password...']");
    this.createUser_button = page.locator("text ='Create User'");
  }

  //methods
  async gotoLoginPage() {
    await this.page.goto("https://os-project-black.vercel.app/");

    await this.loginorsignUp_button.click();
  }

  async contRegister(contEmail, contdisplayname, contPassword) {
    await this.register_button.click();
    await this.contractor_radio.click();
    await this.contractorEmail.fill(contEmail);
    await this.contractorDisplayname.fill(contdisplayname);
    await this.contractorPassword.fill(contPassword);
    await this.createUser_button.click();
  }
}
