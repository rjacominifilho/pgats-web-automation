class Login {
    realizarLogin() {
    cy.contains('Login to your account').should('be.visible')
    cy.get('[data-qa="login-email"]').type(Cypress.env('signEmail'))
    cy.get('[data-qa="login-password"]').type('123456', { log: false})
    cy.get('[data-qa="login-button"]').click()
    }
}

export default new Login()