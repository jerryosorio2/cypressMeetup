/// <reference types="cypress" />

describe('URLS Checking', () => {
      it(`Checking URLs`, () => {
        cy.fixture('../integration/DataProviders/Examples/RestExample2/urls.json').then( urls => {
          urls.forEach((url) => {
            cy.request(url.url).then((response) => {
              expect(response.status).to.equal(200);
           })
          })
        })
      })
  })