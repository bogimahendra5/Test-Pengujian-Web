class LoginPage {
  //Selector for Login
  Login = () => cy.get(".sigil-header__nav.te-header-login");
  fieldEmail = () => cy.get("#LoginID");
  fieldPassword = () => cy.get("#Password");
  btnSelajutnya = () => cy.get("#submit_button");
  btnLogin = () => cy.get("#btn-login");

  //Step Action for Login
  StepActionLogin = (email, password) => {
    this.Login().click();
    this.fieldEmail().type(email);
    this.btnSelajutnya().click();
    this.fieldPassword().type(password);
    this.btnLogin().click();
  };
}
export default new LoginPage();
