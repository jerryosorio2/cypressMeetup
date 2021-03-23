import GooglePage from '../PageObjects/GooglePage.js'

class GoogleActions extends  GooglePage {
    search = (textToSearch) => {
        cy.get(this.inputButton).clear().type(textToSearch).type("{enter}")
        cy.get(this.firstResultButton).click()
    }
    
}
export default new GoogleActions()