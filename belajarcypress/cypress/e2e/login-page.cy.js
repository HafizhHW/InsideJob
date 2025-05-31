// describe('Page Login - Go to Penjamin', () => {

//     const ManagePenjamin = new Penjamin();

//     beforeEach(() => {
//       cy.visit('https://www.saucedemo.com/')
//     })
// })

// describe('TS02 - Proses Checkout', () => {
//     beforeEach(() => {
//         // Mengakses halaman login sebelum setiap test case
//         cy.visit('https://www.saucedemo.com/')
        
//         // Login dengan kredensial yang valid
//         cy.get('#user-name').type('standard_user')
//         cy.get('#password').type('secret_sauce')
//         cy.get('#login-button').click()
        
//         // Memverifikasi bahwa login berhasil dengan memeriksa URL halaman produk
//         cy.url().should('include', '/inventory.html')
//     })

//     afterEach(() => {
//         // Logout setelah setiap test case
//         cy.get('#react-burger-menu-btn').click()
//         cy.get('#logout_sidebar_link').click()
//     })

//     it('TC 01 - Proses Checkout Berhasil', () => {
//         cy.get('#add-to-cart-sauce-labs-backpack').click()
//         cy.get('#shopping_cart_container').click()
//         cy.get('#checkout').click()
//         cy.get('#first-name').type('John')
//         cy.get('#last-name').type('Doe')
//         cy.get('#postal-code').type('12345')
//         cy.get('#continue').click()
//         cy.url().should('include', '/checkout-step-two.html')
//         cy.get('.summary_total_label').should('contain', 'Total:')
//         cy.get('#finish').click()
//         cy.url().should('include', '/checkout-complete.html')
//         cy.get('h2[data-test="checkout_complete_header"]').should('contain', 'Thank you for your order!')
//     })
// })

describe('TS01 - cek fitur login', () => {

    it('Berhasil login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
})

// describe('TS01 - cek fitur login', () => {

//     it('Berhasil login', () => {
//         cy.visit('https://www.shopee.co.id/')
//         cy.get('.W2x2F8 > .YxyuDT > .X0Jdtz').type('apidsanjaya@gmail.com')
//         cy.get('.wIH_BM > .YxyuDT > .X0Jdtz').type('@3726Mdpl')
//         cy.get('.b5aVaf').click()
//         // cy.get(':nth-child(2) > .SKUrUk')
        
//     })
// })