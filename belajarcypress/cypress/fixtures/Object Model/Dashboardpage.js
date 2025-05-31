class Dashbord {
    //Object Navigasi menu
    iconMenu = '#react-burger-menu-btn'
    navigasiAllItem = '[data-test="inventory-sidebar-link"]'
    navigasiAbout = '[data-test="about-sidebar-link"]'
    dropDown = '.product_sort_container'
    productBaju = '.app_logo'


    // Aksi Klik di navigasi Menu
    klikNavigasiMenu() {
        cy.get(this.iconMenu).click();
        cy.get(this.navigasiAbout).click();
    }

    pilihDropDown() {
        // cy.get(this.dropDown).select('Name (Z to A)')
        cy.get(this.productBaju).should('content','Sauce Labs')
    }
}
export default Dashbord;