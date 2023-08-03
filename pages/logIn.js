export class LoginPage {
  
  //constructor:  A function to create and initialize objects.

  constructor(page) {
    //locators

    this.page = page;

    this.loginorsignUp_button = page.locator("text='Log In Or Sign Up'");

    this.username_textbox = page.locator("#emailInput");

    this.password_textbox = page.locator("[placeholder='Password...']");

    this.login_button = page.locator("text='Login'");
  }

  //methods

  async gotoLoginPage() {

    await this.page.goto("https://os-project-black.vercel.app/");
    
  }

  async login(username, password) {

    await this.loginorsignUp_button.click();

    await this.username_textbox.fill(username);

    await this.password_textbox.fill(password);

    await this.login_button.click();

  }
}
