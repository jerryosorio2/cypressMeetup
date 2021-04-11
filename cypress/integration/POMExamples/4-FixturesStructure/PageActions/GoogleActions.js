class GoogleActions {
    search = (textToSearch) => {
        cy.fixture('../integration/BasicStructure/Example4/PageFixtures/Google.json').then((locators)=>{
            cy.get(locators.inputButton).clear().type(textToSearch).type("{enter}")
            cy.get(locators.firstResultButton).click()
        })
    }
    
}
export default new GoogleActions()