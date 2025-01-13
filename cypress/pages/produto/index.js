class Produto {
    verificaListaProduto() {
        
        cy.visit('https://automationexercise.com')
        cy.url().should('includes', 'automationexercise.com')
        cy.contains(`Products`).click()
        cy.url().should('contain', 'products')
        cy.get(`.title`).should('be.visible').and('have.text', 'All Products')
        cy.get('.single-products').should('be.visible').and('have.length.at.least', 1)
    }

    detalharProduto(){
        cy.get('a[href$="details/1"]').click()
        cy.url().should('contain', 'details/1')
        cy.get('.product-information h2').should('be.visible').and('have.text', 'Blue Top')
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')
    }

    buscarProduto(){
        
        const product = 'Premium Polo T-Shirts'
        Cypress.env('product', product)

        cy.visit('https://automationexercise.com')  
        cy.url().should('includes', 'automationexercise.com') 
        cy.contains(`Products`).click() 
        cy.url().should('contain', 'products')
        cy.get(`.title`).should('be.visible').and('have.text', 'All Products')
        cy.get('input#search_product').type(Cypress.env('product'))
        cy.get('button#submit_search').click()
    }
}

export default new Produto()