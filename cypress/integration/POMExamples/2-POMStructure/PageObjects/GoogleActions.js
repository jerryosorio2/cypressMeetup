class GoogleActions {
    
    constructor(){
        this.inputButton = '.gLFyf'
        this.firstResultButton = '[href="https://www.selenium.dev/"] > .LC20lb'
    }

    search = (textToSearch) => {
        cy.get(this.inputButton).clear().type(textToSearch).type("{enter}")
        cy.get(this.firstResultButton).click()
    }
    
}
export default new GoogleActions()