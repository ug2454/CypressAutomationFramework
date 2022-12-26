/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
describe('My second test suite', function () {
    before(() => {
        cy.fixture('example').then((dataObject) => {
            this.dataObject = dataObject;
        })
    })

    it('My first test case', () => {
        Cypress.config('defaultCommandTimeout', 8000)
        const homePage = new HomePage()
        cy.visit(Cypress.env('url'))
        homePage.getEditBox().type(this.dataObject.name)
        homePage.getGender().select(this.dataObject.gender)

        homePage.getShopButton().click()

        cy.selectProduct('Blackberry')
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    })
})