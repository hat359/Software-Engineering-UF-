describe('Travel',()=>{
    // beforeEach(() => {
    //     cy.visit("/travel") 
    //   })

      it('Contains neccesary information', () => {
       
        // cy.visit("/travel") 
        // cy.get('.card').its('length').should('be.eq', 3)

        cy.visit("/travel")

        cy.contains('Before you travel').click()
        cy.contains('During you travel').click()
        cy.contains('After you land').click()
       })
    
       it('has a table', () => {
       
        cy.get('.table').should('be.visible')

        
       })

       it('view answers works properly', () => {
       cy.contains('View Answers').click()

       
        cy.get('.anstext').should('exist')

        
       })




})