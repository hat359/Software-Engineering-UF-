describe('Travel',()=>{
    beforeEach(() => {
        cy.visit("/finance") 
      })

      it('has 3 cards', () => {
       
        
        cy.get('.card').its('length').should('be.eq', 3)
       })


       it('goes to bank account section',()=>{
        cy.contains('').click()
       

       })



    })
