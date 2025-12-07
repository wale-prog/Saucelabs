import login from "../Util/login"
import productPage from "../support/Pages/productPage";
import cartPage from "../support/Pages/cartPage";

describe("Add item to cart and checkout", () => {

    beforeEach(() => {
        cy.visit('')
        cy.fixture('dataFixture').as('loginData')
        login.login("valid_login")
    });

    it('Verify that user that user is able to checkout', () => {
        const items = productPage.getCartItems();
        for(let i = 0; i < items.length; i++) {
            items[i].click();
        }

        cartPage.elements.itemNumber().invoke("text").then((text) => {
            expect(text).to.eq('2')
        })

        cartPage.clickCartLink();
        cartPage.elements.backPackItem().should('exist')
        cartPage.elements.tShirtItem().should('exist')
        cartPage.clickCheckoutBtn();

        cartPage.personalDetail("Micheal", "John", "1234567")
        cartPage.clickContinueBtn();
    })

})