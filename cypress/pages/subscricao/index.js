class Subscricao {
    enviarSubscricao() {

        cy.visit('https://automationexercise.com')  
        cy.url().should('includes', 'automationexercise.com') 
        cy.get('.single-widget h2').scrollIntoView().and('have.text', 'Subscription')
        cy.get('#susbscribe_email').type('rjacominifilho@gmail.com')
        cy.get('button#subscribe').click()
    }
}

export default new Subscricao()