describe('Travel',()=>{
    beforeEach(() => {
        cy.visit("/finance") 
      })

      it('has 3 cards', () => {
       
        
        cy.get('.card').its('length').should('be.eq', 3)
       })





    })
