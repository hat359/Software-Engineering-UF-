describe('Health Insurance',()=>{
    beforeEach(() => {
        cy.visit("/HealthInsurance") 
      })
  
      it('has an image div', () => {
         
          
        cy.get('.fin')
        .find('img')
        .should('be.visible')
        .should('have.css','width')
        
       })

       it('Health insurance tests', () => {
         
          
        cy.get('.Bacc')
        .should('have.css','maxWidth')

        cy.get('.Bacc')
        .find('img')
        .should('be.visible')


        cy.contains('Determining the right health insurance')
        cy.contains('GatorGradCare')
        .click()
        cy.contains('University Insurance').click()
        cy.contains('Private Insurance').click()

        

       })



    })