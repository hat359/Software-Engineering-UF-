describe('Finance',()=>{
  beforeEach(() => {
    cy.visit("/finance") 
    //cy.get('Know More').click({ multiple: true })

  })

  it('Necessary sections are present', () => {
    
    //cy.visit("/finance") 

        cy.contains('Finances')
        cy.contains('Appropriate information right at your disposal')

        cy.contains('Bank Account')
        cy.contains('Health Insurance')
        cy.contains('Financial Aid')

})

      it('has 3 cards', () => {
       
        
        cy.get('.card').its('length').should('be.eq', 3)

      
       })


      
       it('goes to Bank Account section',()=>{

        cy.get('.card').contains('Bank Account').click()

        cy.url()
        .should('be.equal', 'http://localhost:3000/BankAccount')
        

       })
      
      
       it('goes to Health Insurance section',()=>{

        cy.get('.card').contains('Health Insurance').click()
       

        cy.url()
        .should('be.equal', 'http://localhost:3000/HealthInsurance')

       })

       it('goes to Financial aid page',()=>{

        
        cy.get('.card').contains('Financial Aid').click()
        

        cy.url()
        .should('be.equal', 'http://localhost:3000/FinancialAid')
        

       })

    })


