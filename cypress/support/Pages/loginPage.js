class LoginPage {
    elements = {
        loginLogo: () => cy.get('.login_logo'),
        usernameField: () => cy.get('[data-test="username"]'),
        passwordField: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        errorMsg: () => cy.get('[data-test="error"]')
    }

    getLoginLogo() {
        return this.elements.loginLogo();
    }

    login(username, password) {
        this.elements.usernameField().type(username);
        this.elements.passwordField().type(password);
        this.elements.loginBtn().click()
    }

    getErrorMsgBox() {
        return this.elements.errorMsg();
    }

}

export default new LoginPage();