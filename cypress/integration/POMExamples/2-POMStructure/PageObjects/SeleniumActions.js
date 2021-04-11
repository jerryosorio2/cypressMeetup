class SeleniumActions {
    
    constructor(){
        this.labelTitle = '.hero > :nth-child(1)'
    }

    verifyTitle = (titleText) => {
        cy.get(this.labelTitle).contains(titleText, { matchCase: false })
    }
    
}

export default new SeleniumActions ()