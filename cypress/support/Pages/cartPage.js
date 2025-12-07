class CartPage {
    elements = {
        itemNumber: () => cy.get('[data-test="shopping-cart-badge"]'),
        cartLink: () => cy.get('[data-test="shopping-cart-link"]'),
        checkoutBtn: () => cy.get('[data-test="checkout"]'),
        backPackItem: () => cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'),
        tShirtItem: () => cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]'),
        firstNameField: () => cy.get('[data-test="firstName"]'),
        lastNameField: () => cy.get('[data-test="lastName"]'),
        zipcodeField: () => cy.get('[data-test="postalCode"]'),
        continueBtn: () => cy.get('[data-test="continue"]'),
        finishBtn: () => cy.get('[data-test="finish"]')
    }

    clickCartLink() {
        this.elements.cartLink().click();
    }
    clickCheckoutBtn() {
        this.elements.checkoutBtn().click();
    }

    personalDetail(firstName, lastName, zipcode) {
        this.elements.firstNameField().type(firstName)
        this.elements.lastNameField().type(lastName)
        this.elements.zipcodeField().type(zipcode)
    }

    clickContinueBtn() {
        this.elements.continueBtn().click();
    }

}

export default new CartPage();