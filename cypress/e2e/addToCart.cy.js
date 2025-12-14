describe("Add to cart", () => {
    beforeEach(() => {
        cy.fixture('dataFixture').as('loginData')
    })
    it("Logs in to the portal", function () {
        cy.prompt([
            'Navigate to https://www.saucedemo.com/',
            'confrim that the url is https://www.saucedemo.com/',
            'type {{username}} in the username field',
            'type {{password}} in the password field',
            'click the login button',
            'Confirm that the first add to cart button is present on the page',
            'Click the first add to cart button to add the first item to the cart',
            'Click the second add to cart button to add the second item to the cart',
            'confirm that the cart item number on the top right hand corner of the screen is 2',
            'click the cart icon to navigate to the cart page',
            'confirm that the item added to cart is present in the cart page',
            'click the checkout button on the cart page',
            "fill in the personal details form - first name is Michael, last name is John and postal code is 123456",
            'click the continue button to proceed to the next step',
            'confirm that the total amount is correctly displayed on the checkout overview page',
            'click the finish button to complete the purchase',
            'confirm that the thank you for your order message is displayed on the checkout complete page'
        ],
            {
                placeholders:
                {
                    username: this.loginData.userData.validUsername,
                    password: this.loginData.userData.validPassword
                },
            }
        )
    })
})
