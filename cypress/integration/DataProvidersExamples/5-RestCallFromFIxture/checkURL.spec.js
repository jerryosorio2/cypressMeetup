/// <reference types="cypress" />

describe('URLS Checking', () => {
      it(`Checking URLs`, () => {
        cy.fixture('../integration/DataProvidersExamples/5-RestCallFromFixture/urls.json').then( urls => {
          urls.forEach((url) => {
            cy.request(url.url).then((response) => {
              expect(response.status).to.equal(200);
           })
          })
        })
      })
  })