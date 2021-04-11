/// <reference types="cypress" />
describe('generated from fixture', () => {
   const urls = require('./urls.json')   

    urls.urls.forEach((url) => {
      it(`Visition: ${url}`, () => {
        cy.visit(url);
      })
    })
  })