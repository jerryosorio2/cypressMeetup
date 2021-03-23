class SeleniumActions {
    verifyTitle = (titleText) => {
        cy.fixture('../integration/BasicStructure/Example4/PageFixtures/Selenium.json').then((locators)=>{
            cy.get(locators.labelTitle).contains(titleText, { matchCase: false })
        })
    }
    
}

export default new SeleniumActions()