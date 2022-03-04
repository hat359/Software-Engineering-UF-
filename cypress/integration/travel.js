describe('Travel',()=>{
    // beforeEach(() => {
    //     cy.visit("/travel") 
    //   })

      it('has 3 cards', () => {
       
        cy.visit("/travel") 
        cy.get('.card').its('length').should('be.eq', 3)
       })
    
       it('has a table', () => {
       
        cy.get('.table').should('be.visible')

        
       })

       it('view answers works properly', () => {
       cy.contains('View Answers').click()

       
        cy.get('.anstext').should('exist')

        
       })




})