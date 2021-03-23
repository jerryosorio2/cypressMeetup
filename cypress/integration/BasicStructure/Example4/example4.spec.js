// Example -> Fixture structure
/// <reference types="cypress" />
import GoogleActions from './PageActions/GoogleActions.js'
import SeleniumActions from './PageActions/SeleniumActions.js'

describe('Example3', () => {
    before(() => {
      cy.visit('http://www.google.com')
    })

    it('Searching in Google', () => {
        GoogleActions.search('Selenium')
        SeleniumActions.verifyTitle('Selenium')
    })
})