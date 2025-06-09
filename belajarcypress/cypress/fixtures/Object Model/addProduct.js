class addProduct {
    //Object CheckOut

    // addItem = '[data-test="add-to-cart-sauce-labs-backpack"]'
    goToCart = '.shopping_cart_link';
    IconAddCard = '.btn.btn_primary.btn_small.btn_inventory';
    iconShoppingCart = '.shopping_cart_link';


    // Aksi Klik di Add Product

    additem() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    }
   
    toCart() {
        // cy.get(this.IconAddCard).eq(5).click();
        // cy.get(this.IconAddCard).eq(1).click();
        // cy.get(this.IconAddCard).eq(2).click();
        // cy.get(this.iconShoppingCart).should('be.visible').and('contain.text', '3');
        // cy.get(this.iconShoppingCart).click();
        // 
        // cy.get(this.IconAddCard).eq(5).click();
        // cy.get(this.IconAddCard).eq(1).click();
        // cy.get(this.IconAddCard).eq(2).click();
        cy.get(this.goToCart).should('be.visible');
        cy.get(this.goToCart).click();
        // 
        // cy.get('[data-test="shopping-cart-link"]').click();
        // cy.get(this.goToCart).should('content','[data-test="shopping-cart-link"]').click();
    }
}
export default addProduct;