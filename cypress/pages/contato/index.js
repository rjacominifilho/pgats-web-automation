class Contato {
    preencherContato() {

        cy.visit('https://automationexercise.com')
        cy.url().should('includes', 'automationexercise.com')
        cy.contains(`Contact us`).click()
        cy.get(`.contact-form h2`).should('be.visible').and('have.text', 'Get In Touch')
        cy.get('[data-qa="name"]').type('Rodrigo')
        cy.get('[data-qa="email"]').type('rjacominifilho@gmail.com')
        cy.get('[data-qa="subject"]').type('Produto ruim')
        cy.get('[data-qa="message"]').type('Esse produto está muito ruim e de péssima qualidade')
        cy.fixture('example.json').as('file')
        cy.get('[name="upload_file"]').selectFile('@file')
        cy.get('[data-qa="submit-button"]').click()

    }
}

export default new Contato()