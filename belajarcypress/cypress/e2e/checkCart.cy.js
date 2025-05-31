import checkCart from "../fixtures/Object Model/checkCart";

const checkcart = new checkCart();

describe('cek login dulu', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('cek keranjang', () => {
        checkcart.toCart();
    })

    // it('cek navigasi menu', () => {
    //     dashbord.klikNavigasiMenu();
    // })
})
