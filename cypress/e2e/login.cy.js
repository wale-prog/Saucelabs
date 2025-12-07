import loginPage from "../support/Pages/loginPage"
import productPage from "../support/Pages/productPage"

describe("Login page tests", function () {
  beforeEach(() => {
    cy.visit("")
    cy.fixture("dataFixture.json").as('loginData')
  })

  it("Verify user is unable to login with invalid username and valid password", function () {
    loginPage.getLoginLogo().should('exist')
    loginPage.login(this.loginData.userData.invalidUsername, this.loginData.userData.validPassword)
    loginPage.getErrorMsgBox().invoke('text').then((text) => {
      expect(text).to.include('Username and password do not match any user in this service')
    })
  })

  it("Verify user is unable to login with valid username and invalid password", function () {
    loginPage.getLoginLogo().should('exist')
    loginPage.login(this.loginData.userData.validUsername, this.loginData.userData.invalidPassword) 
    loginPage.getErrorMsgBox().invoke('text').then((text) => {
      expect(text).to.include('Username and password do not match any user in this service')
    })
  })

  it("Verify that user is able to login with correct credentials", function () {
    // loginPage.getLoginLogo().should('exist')
    loginPage.login(this.loginData.userData.validUsername, this.loginData.userData.validPassword)
    productPage.getProductLogo().should('exist');
    // productPage.getProductLogo().should('not.be.clickable').then((valid) => {
    //   cy.log("Login successful, product logo is not clickable: " + valid)
    // });
  })

})