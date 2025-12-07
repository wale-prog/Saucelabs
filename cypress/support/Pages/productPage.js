class ProductPage {
    elements = {
        productLogo: () => cy.get('[data-test="title"]'),
        backPackpackItem: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        tShrit: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }

    getProductLogo() {
        return this.elements.productLogo();
    }

    getCartItems() {
        return [this.elements.backPackpackItem(), this.elements.tShrit()]
    }
}

export default new ProductPage();