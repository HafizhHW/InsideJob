class addProduct {
    //Object CheckOut

    addItem = '[data-test="add-to-cart-sauce-labs-backpack"]'
    // goToCart = cy.get('[data-test="shopping-cart-link"]')


    // Aksi Klik di Add Product

    additem() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    }
   
    toCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
        // cy.get(this.goToCart).should('content','[data-test="shopping-cart-link"]').click();
    }
}
export default addProduct;