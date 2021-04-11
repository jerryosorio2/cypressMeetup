/// <reference types="cypress" />
import GoogleActions from './PageObjects/GoogleActions.js'
import SeleniumActions from './PageObjects/SeleniumActions.js'

describe('Example2', () => {
    before(() => {
      cy.visit('http://www.google.com')
    })

    it('Searching in Google', () => {
        GoogleActions.search('Selenium')
        SeleniumActions.verifyTitle('Selenium')
    })

})