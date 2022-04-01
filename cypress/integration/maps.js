describe('Maps',()=>{
    beforeEach(() => {
        cy.visit("/map") 
      })

      it('has an image div', () => {
       
        
        cy.get('.map')
        .find('img')
        .should('be.visible')
        .should('have.css','width')
        
       })

       
      it('displays a map', () => {
       
        cy.get('#map')
        .should('be.visible')
        
        
       })
  
  

    })