describe('Academics',()=>{

      it('has 2 cards', () => {
       
        
        cy.get('.card').its('length').should('be.eq', 2)
       })


       it('goes to bank account section',()=>{
        cy.contains('').click()
       

       })



    })