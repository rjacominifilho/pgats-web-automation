/// <reference types="cypress" />

import cadastro from '../pages/cadastro'
import deletar from '../pages/delete'
import login from '../pages/login'
import logout from '../pages/logout'
import contato from '../pages/contato'
import produto from '../pages/produto'
import subscricao from '../pages/subscricao'
import carrinho from '../pages/carrinho'
import pagamento from '../pages/pagamento'

describe('Trabalho de conclusão', () => {
    
    it('Test Case 1: Register User', () => {
        cadastro.preencherFormulario()
        cy.get('.fa-user').parent().should('contain', Cypress.env('signUpName'))
        deletar.deletarUsuario()
    });

    it('Test Case 2: Login User with correct email and password', () => {
        cadastro.preencherFormulario()
        cy.get('.fa-user').parent().should('contain', 'Tester QA')
        logout.realizarLogout()
        cy.contains('Login to your account').should('be.visible')
        login.realizarLogin()
        cy.get('.fa-user').parent().should('contain', 'Tester QA')
        deletar.deletarUsuario()
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        
        cy.visit('https://automationexercise.com')
        cy.url().should('includes', 'automationexercise.com')
        cy.get('a[href$=login]').click()
        cy.contains('Login to your account').should('be.visible')
        cy.get('[data-qa="login-email"]').type('filho@gmail.com')
        cy.get('[data-qa="login-password"]').type('65232', { log: false})
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!').should('be.visible')
    });

    it('Test Case 4: Logout User', () => {
        cadastro.preencherFormulario()
        logout.realizarLogout()
        cy.url().should('includes', 'automationexercise.com/login')
        login.realizarLogin()
        deletar.deletarUsuario()
    });

    it('Test Case 5: Register User with existing email', () => {
        cadastro.preencherFormulario()
        logout.realizarLogout()
        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(Cypress.env('signEmail'))
        cy.get('[data-qa="signup-email"]')
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Email Address already exist!').should('be.visible')
        login.realizarLogin()
        deletar.deletarUsuario()

    });
    
    it('Test Case 6: Contact Us Form', () => {

        contato.preencherContato()
        cy.get(`.status`).should('be.visible').and('have.text', 'Success! Your details have been submitted successfully.')
        cy.get(`.btn-success`).click()
        cy.url().should('includes', 'automationexercise.com')

    });

    it('Test Case 8: Verify All Products and product detail page', () => {

        produto.verificaListaProduto()
        produto.detalharProduto()

    });

    it('Test Case 9: Search Product', () => {

        produto.buscarProduto()
        cy.contains(`Searched Products`).should('be.visible')
        cy.get('.single-products').should('be.visible').and('have.length.at.least', 1)

    });

    it('Test Case 10: Verify Subscription in home page', () => {
        
        subscricao.enviarSubscricao()
        cy.contains(`You have been successfully subscribed!`).should('be.visible')

    });

    it('Test Case 15: Place Order: Register before Checkout', () => {
        cadastro.preencherFormulario()
        cy.get('.fa-user').parent().should('contain', Cypress.env('signUpName'))
        produto.buscarProduto()
        carrinho.adicionarProduto()
        carrinho.verCarrinho()
        carrinho.revisarCarrinho()
        cy.get('a[href$=payment]').click()
        pagamento.informarCartao()
        pagamento.realizarPagamento()
        deletar.deletarUsuario()
    });
});