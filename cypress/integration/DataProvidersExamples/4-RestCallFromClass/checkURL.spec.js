/// <reference types="cypress" />
import URLsProvider from './URLsProvider.js'

describe('URLS Checking', () => {
      const urls = URLsProvider.getUrls()
      urls.forEach((url) => {
      it(`Visition:  ${url.url}`, () => {
        cy.request(url.url).then((response) => {
           expect(response.status).to.equal(200);
        })
      })
    })
  })