import SeleniumPage from '../PageObjects/SeleniumPage.js'

class SeleniumActions extends SeleniumPage{
    verifyTitle = (titleText) => {
        cy.get(this.labelTitle).contains(titleText, { matchCase: false })
    }
    
}

export default new SeleniumActions()