import addProduct from "../fixtures/Object Model/addProduct";

const addproduct = new addProduct();

describe('cek login dulu', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Tambah Product', () => {
        addproduct.additem();
    })

    // it('cek keranjang', () => {
    //     addproduct.toCart();
    // })

})