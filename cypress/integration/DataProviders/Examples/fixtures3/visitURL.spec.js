/// <reference types="cypress" />
import URLsProvider from './URLsProvider.js'

describe('generated from fixture', () => {
      const urls = URLsProvider.getUrls()
      debugger
      urls.forEach((url) => {
      it(`Visition: JBOA ${url.url}`, () => {
        cy.visit(url.url);
      })
    })
  })