describe('Aid',()=>{
    beforeEach(() => {
        cy.visit("/FinancialAid") 
      })
  
      it('has an image div', () => {
         
          
        cy.get('.fin')
        .find('img')
        .should('be.visible')
        .should('have.css','width')
        
       })

       it('misc', () => {
         
          
        cy.get('.Bacc')
        .should('have.css','maxWidth')

        cy.get('.Bacc')
        .find('img')
        .should('be.visible')

        cy.contains('Finding Funding')
        .should('be.visible')

        cy.contains('Grants').click()
        cy.contains('Scholarships').click()
        cy.contains('Student Employment').click()
        cy.contains('Student Loans').click()
        cy.contains('Other Aid Options').click()





        

        

       })



    })