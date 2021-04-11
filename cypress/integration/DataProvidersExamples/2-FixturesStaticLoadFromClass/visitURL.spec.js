/// <reference types="cypress" />
import URLsProvider from './URLsProvider.js'

describe('generated from fixture', () => {
      URLsProvider.getUrls().forEach((url) => {
      it(`Visition: ${url}`, () => {
        cy.visit(url);
      })
    })
  })