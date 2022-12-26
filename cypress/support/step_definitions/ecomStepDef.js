const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../integration/pageObjects/HomePage";
const homePage = new HomePage()

beforeEach(()=>{
    cy.fixture('example').then(function(dataObject) {
        this.dataObject = dataObject;
    })
})

Given('I open ecommerce page', function () {
    cy.visit(Cypress.env('url'))
})

When('I add items to cart', function (dataTable) {
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])

    homePage.getShopButton().click()

    cy.selectProduct('Blackberry')
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
})


When('Validate the total prices', function () {
    cy.get("td[class='text-right']").find('h3 strong').should('contain.text', '50000')
})


Then('Select the country, Submit and verify Thank you message', function () {
    cy.get("button[class='btn btn-success']").click()
    cy.get('#country').type('India')
    cy.wait(4000)
    cy.get("div[class='suggestions'] ul li a").click()
    cy.get("input[value='Purchase']").click()

    cy.get('.alert').then((element) => {
        const message = element.text()
        expect(message.includes('Thank you')).to.be.true
    })
})

