class Pagamento {
    informarCartao() {
        cy.url().should('includes', 'payment')
        cy.contains(`Payment`).should('be.visible')
        cy.get('[data-qa="name-on-card"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="card-number"]').type('5214695412548632')
        cy.get('[data-qa="cvc"]').type('654')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2050')
    }

    realizarPagamento(){
        cy.get('[data-qa="pay-button"]').click()
        cy.contains(`Congratulations! Your order has been confirmed!`).should('be.visible')
    }
}

export default new Pagamento()