class Deletar {
    deletarUsuario() {
        cy.get('a[href$=account]').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('.btn-primary').should('be.visible')
        cy.get('.btn-primary').click()
    }
}

export default new Deletar()