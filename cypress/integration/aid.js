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

       it('Financial aid tests', () => {
         
          
        cy.get('.Bacc')
        .should('have.css','maxWidth')

        cy.get('.Bacc')
        .find('img')
        .should('be.visible')

        cy.contains('Finding Funding')
        .should('be.visible')

      })
    


        it('First financial aid',()=>{
        

          cy.contains('Grants').click()
        
          cy.contains('Contact')
          .click()
  
          it('navigates',()=>{
  
            cy.get('a').should('have.attr', 'href', 'https://www.sfa.ufl.edu/contact-sfa/')
    
           })
  
           cy.visit("/FinancialAid")
  
        })
  
        it('Second financial aid',()=>{
  
          cy.contains('Scholarships').click()

          cy.contains('Search')
          .click()
  
          it('navigates',()=>{
            cy.get('a').should('have.attr', 'href', 'https://www.sfa.ufl.edu/search/')
  
         })
  
         cy.visit("/FinancialAid")
  
        })
  
        it('Third financial aid',()=>{
  
          cy.contains('Student Employment').click()

          cy.contains('Get a job')
          .click()
  
          it('navigates',()=>{
            cy.get('a').should('have.attr', 'href', 'https://internationalcenter.ufl.edu/f-1-student/f-1-status-requirements/employment')
    
           })

           cy.visit("/FinancialAid")
         
        })

        it('Fourth financial aid',()=>{
  
          cy.contains('Student Loans').click()

           cy.contains('Learn More')
           .click()
   
           it('navigates',()=>{
            cy.get('a').should('have.attr', 'href', 'https://www.sfa.ufl.edu/types-of-aid/loans/')
     
            })

            cy.visit("/FinancialAid")
          
         })

         it('Fifth financial aid',()=>{
  
          cy.contains('Other Aid Options').click()
  
           cy.contains('Find')
           .click()
   
           it('navigates',()=>{
            cy.get('a').should('have.attr', 'href', 'https://www.fastweb.com')
     
            })

            
          
         })
        

       })



    