const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../pageObjects/HomePage"
const homePage = new HomePage()



Given('I open ecommerce page', function () {
    homePage.getUrl()
})

When('I add items to cart', function (dataTable) {
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])

    homePage.getShopButton().click()

    cy.selectProduct('Blackberry')
    homePage.getProductCheckoutButton().click()
})


When('Validate the total prices', function () {
    homePage.getAmountText().find('h3 strong').should('contain.text', '50000')
})


Then('Select the country, Submit and verify Thank you message', function () {
    homePage.getDropdown().click()
    homePage.getCountry().type('India')
    homePage.getWait()
    homePage.getIndia().click()
    homePage.getPurchaseButton().click()

    homePage.getAlert().then((element) => {
        const message = element.text()
        expect(message.includes('Thank you')).to.be.true
    })
})

