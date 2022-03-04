describe('Main', () => {
    beforeEach(() => {
      cy.visit("/") 
    })
  
    it('renders main page correctly', () => {
      
        
      cy.url()
        .should('be.equal', 'http://localhost:3000/')
    })


    it('has 3 cards', () => {
       

       cy.get('.card').its('length').should('be.eq', 3)
      })


      it('renders travel page on click on travel', () => {
       

        cy.contains('Travel').click()

        cy.url()
        .should('be.equal', 'http://localhost:3000/travel')

        cy.visit('/')


       })

       it('renders Academics page on click on academics', () => {
       

        cy.contains('Academics').click()

        cy.url()
        .should('be.equal', 'http://localhost:3000/academics')

        cy.visit('/')


       })

       it('renders Finance page on click on Finance ', () => {
       

        cy.contains('Finance').click()

        cy.url()
        .should('be.equal', 'http://localhost:3000/finance')

        cy.visit('/')


       })



  })


