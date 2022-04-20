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

      })

      it('First insurance description',()=>{
        

        cy.contains('GatorGradCare').click()
        

        cy.contains('Learn More')
        .click()
        
        it('navigates',()=>{

          cy.get('a').should('have.attr', 'href', 'https://gatorcare.org/gatorgradcare/')

          
         })

         //cy.visit("/HealthInsurance")

      })

      it('Second insurance description',()=>{

        cy.contains('University Insurance').click()
        

        cy.contains('Learn More')
        .click()
       

        it('navigates',()=>{

          cy.get('a').should('have.attr', 'href', 'https://shcc.ufl.edu/fees-and-insurance/health-insurance-options/uf-insurance-plan/')

        
       })

       //cy.visit("/HealthInsurance")

      })

      it('Third insurance description',()=>{

       cy.contains('Private Insurance').click()
        cy.contains('Learn More')
        .click()

        

        it('navigates',()=>{

          cy.get('a').should('have.attr', 'href', 'https://healthcompliance.shcc.ufl.edu/health-insurance-requirement/waiver/')

          
         })
       
      })
        

  })


