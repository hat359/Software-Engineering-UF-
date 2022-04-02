describe('Finance',()=>{
  beforeEach(() => {
    cy.visit("/finance") 
  })

  it('Necessary sections are present', () => {
    
    //cy.visit("/finance") 

    cy.title().should('eq', 'Finances')

        cy.contains('Bank Account')
        cy.contains('Health Insurance')
        cy.contains('Financial Aid')

  })

      it('has 3 cards', () => {
       
        
        cy.get('.card').its('length').should('be.eq', 3)

      
       })
       

       it('goes to Bank Account section',()=>{

       
        cy.contains('Know More').click()

        cy.url()
        .should('be.equal', 'http://localhost:3000/BankAccount')
        
        cy.visit("/finance")

       })
      
      
       it('goes to Health Insurance section',()=>{

        cy.contains('Know More').click()

        cy.url()
        .should('be.equal', 'http://localhost:3000/HealthInsurance')


       })

       it('goes to Financial aid page',()=>{

       
        cy.contains('Know More').click()

        cy.url()
        .should('be.equal', 'http://localhost:3000/FinacialAid')
        
        cy.visit("/finance")

       })



    })
