class HomePage {
    getEditBox() {
        return cy.get("input[name='name']:nth-child(2)")
    }

    getGender() {
        return cy.get('select')
    }

    getShopButton() {
        return cy.get(':nth-child(2) > .nav-link')
    }

    getDropdown() {
        return cy.get("button[class='btn btn-success']")
    }

    getCountry() {
        return cy.get('#country')
    }

    getIndia() {
        return cy.get("div[class='suggestions'] ul li a")
    }

    getPurchaseButton() {
        return cy.get("input[value='Purchase']")
    }

    getAlert() {
        return cy.get('.alert')
    }

    getWait() {
        return cy.wait(4000)
    }

    getAmountText() {
        return cy.get("td[class='text-right']")
    }

    getProductCheckoutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getUrl() {
        return cy.visit(Cypress.env('url'))
    }
}

export default HomePage;