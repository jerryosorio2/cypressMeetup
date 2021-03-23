/// <reference types="cypress" />
describe('dynamic users using request', { retries: 2 }, () => {
  // this example fetches list of 3 users from the server
  // and then creates 3 separate tests to check something about each user

  let users

  before(() => {
    // receive the dynamic list of users
    cy.request('https://jsonplaceholder.cypress.io/users?limit=3')
    .its('body')
    .then((list) => {
      users = list
    })
  })

  // we know there will be 3 objects in the "users" list
  Cypress._.range(0,3).forEach((k) => {
    it(`user # ${k}`, () => {
      const user = users[k]
      debugger
      cy.log(`user ${user.name} ${user.email}`)
      //cy.wrap(user).should('have.property', 'name')
    })
  })
})