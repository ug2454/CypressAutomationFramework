/// <reference types="Cypress" />

describe('My First test suite', () => {
    it('My First test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length', 4)
        cy.get(':nth-child(3)>.product-action>button').click()

        cy.get('@productsLocator').find('.product').each(($el, index, list) => {
            console.log($el)
            const constVeg = $el.find('h4.product-name').text()
            if (constVeg.includes('Cashews')) {

                $el.find('button').trigger('click')
            }

        })
        cy.get('.brand').should('have.text', 'GREENKART')


    })
})