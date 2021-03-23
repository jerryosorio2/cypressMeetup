const states = [
  { 
    "startPath": "/path1", 
    "fixture": "www.google.com",
    "context": "1"
  },
  { 
    "startPath": "/path2", 
    "fixture": "www.yahoo.es",
    "context": "2"
  }
]

describe('Start test', function() {

  // Loop through both test
  states.forEach((state) => {
    // SOLUTION HERE
    describe(state.context, () => {

      // In this before statement the fixtures are setup
      //before(function () {
        //cy.flushDB()
        //cy.fixture(state.fixture)
          //.then(fixtureData => {
            //new Cypress.Promise((resolve, reject) => 
              //cy.createCollections(fixtureData, resolve, reject)
            //)
         // })
         // .then(() => cy.log(state.startPath)) 
     // })

      context('Within this context', function() {
        it(`Can run some test for fixture ${state.fixture}`, function() {
          cy.visit(state.fixture);
        })
      })
    })
  })
})