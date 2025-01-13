class Carrinho {

    adicionarProduto() {
        cy.contains(`Premium Polo T-Shirts`).should('be.visible')
        cy.get('.product-image-wrapper .single-products .productinfo .btn').click()
    }

    verCarrinho(){
        cy.contains(`Cart`).click()
        cy.url().should('includes', 'view_cart')
        cy.contains(`Shopping Cart`).should('be.visible')
    }

    revisarCarrinho(){
        cy.contains(`Proceed To Checkout`).click()
        cy.url().should('includes', 'checkout')
        cy.contains(`Checkout`).should('be.visible')
        cy.get('#address_delivery li').should('be.visible').and('have.length', 8)
        cy.get('#cart_info tbody tr').should('be.visible').and('have.length', 2)
        cy.get('.form-control').type('É isso que eu quero')
    }

}

export default new Carrinho()