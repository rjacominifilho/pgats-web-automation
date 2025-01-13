class Logout {
    realizarLogout() {
        cy.get('a[href$=logout').click()
    }
}

export default new Logout()