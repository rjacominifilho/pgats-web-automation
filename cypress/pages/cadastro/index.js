/// <reference types="cypress" />

class Cadastro {
    preencherFormulario(){

        const signUpName = 'Tester QA'
        const signEmail = 'testejacomini@gmail.com'

        Cypress.env('signUpName', signUpName)
        Cypress.env('signEmail', signEmail)

        cy.visit('https://automationexercise.com')
        cy.url().should('includes', 'automationexercise.com')
        cy.get('a[href$=login]').click()
        cy.contains('New User Signup!').should('be.visible')
        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(Cypress.env('signEmail'))
        cy.get('[data-qa="signup-email"]')
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Enter Account Information').should('be.visible')
        cy.get('input[type=radio]').check('Mr')
        cy.get('[data-qa="password"]').type('123456', { log: false})
        cy.get('select[name="days"]').select('23')
        cy.get('select[name="months"]').select('March')
        cy.get('select[name="years"]').select('1990')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('[data-qa=first_name]').type('Tester')
        cy.get('[data-qa=last_name]').type('QA')
        cy.get('[data-qa=address]').type('Avenida Alberto Craveiro, 1240')
        cy.get('select[name="country"]').select('Canada')
        cy.get('[data-qa=state]').type('Ceará')
        cy.get('[data-qa=city]').type('Fortaleza')
        cy.get('[data-qa=zipcode]').type('60165954')
        cy.get('[data-qa=mobile_number]').type('+5585996154854')
        cy.get('[data-qa=create-account]').click()
        cy.contains('Account Created!').should('be.visible')
        cy.get('.btn-primary').should('be.visible')
        cy.get('.btn-primary').click()
    }
}

export default new Cadastro()