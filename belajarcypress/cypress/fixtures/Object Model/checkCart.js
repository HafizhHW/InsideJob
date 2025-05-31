class checkCart {
    //Object CheckOut

    goToCart = '.shopping_cart_link'


    // Aksi Klik di Add Product
   
    toCart() {
        cy.get(this.goToCart).click();
    }
}
export default checkCart;