export class contractorProfile {
  constructor(page) {
    this.page = page;

    this.avatar_button = page.locator(".image_container");
    // this.avatar_button = page.locator("[class='image_container']");
    this.contAvatar = page.locator("text='My Profile'");
    this.contEditProfile = page.locator("text='Edit My Profile'");
    this.firstName = page.locator("[name='firstName']");
    this.lastName = page.locator("[name='lastName']");
    this.qualification = page.locator("[name='qualification']");
    this.linkedIn = page.locator("[name='linkedinUrl']");
    this.gitHub = page.locator("[name='githubUrl']");
    this.summary = page.locator("[name='summary']");
    this.projectName = page.locator("[name='projectName-0']");
    this.projectDescription = page.locator("[name='description-0']");
    this.saveButton = page.locator("text='Save'");
    this.about = page.locator("[href='/About'  ]");
    this.search = page.locator("[href='/search'  ]");
    this.contractorHome = page.locator("[href='/contractorList'  ]");
    this.avatar_button = page.locator(".image_container");
    this.logOut = page.locator("text='Logout'");
  }

  //methods

  async editProfileContractor(
    firstname,
    lastname,
    qualific,
    linkedinURL,
    githubURL,
    summary,
    projname,
    projdesc
  ) {
    await this.avatar_button.click();
    await this.contEditProfile.click();
    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.qualification.fill(qualific);
    await this.linkedIn.fill(linkedinURL);
    await this.gitHub.fill(githubURL);
    await this.summary.fill(summary);
    await this.projectName.fill(projname);
    await this.projectDescription.fill(projdesc);
    await this.saveButton.click();
    await this.about.click();
    await this.search.click();
    await this.contractorHome.click();
    await this.avatar_button.click();
    await this.logOut.click();
  
  }
}
