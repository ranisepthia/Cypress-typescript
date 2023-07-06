export class DashboardPage{
    link_SauceLabsBackpack = '#item_4_title_link'
    btnAddToCart = '#add-to-cart-sauce-labs-backpack'
    iconCartQuantity = '.shopping_cart_badge'
    sauceLabsBackpack(){
        cy.contains(this.link_SauceLabsBackpack).click()
        //cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    
    addToCart() {
        cy.get(this.link_SauceLabsBackpack).should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').should('be.visible')
    }
    removeCart() {
        cy.get(this.link_SauceLabsBackpack).should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').should('be.visible')
    }
}