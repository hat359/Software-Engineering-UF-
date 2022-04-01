// describe('Academics',()=>{

//       it('has 2 cards', () => {
       
        
//         cy.get('.card').its('length').should('be.eq', 2)
//        })


//        it('goes to bank account section',()=>{
//         cy.contains('').click()
       

//        })



//     })


describe('Academics',()=>{
  beforeEach(() => {
      cy.visit("/academics") 
    })

    it('has an image div', () => {
       
        
      cy.get('.fin').find('img').should('be.visible').should('have.css','width')
      
     })

     it('Academics module testing', () => {
       
        
      
      cy.get('.Bacc')
      .should('be.visible')
      .should('have.css', 'width')

      cy.contains("Select a course to join a group")
      cy.get('#contain')
      .get('#item')
      .get('#form')
      .should('have.css','width')

        cy.get('#demo-multiple-name')
        .click()

        // cy.get('#bitem')
        // .find('join')
        // .click()


        cy.get('table')
        .should('exist')
        .should('be.visible')


        cy.visit("/academics/profs") 

        cy.get('.Bacc')
        .should('exist')
        .should('be.visible')
        .should('have.css','width')

        cy.get('[name=course]').should('be.visible')
        cy.get('[name=prof]').should('be.visible')

        cy.get('table')
        .should('exist')
        .should('be.visible')
        cy.contains('ProfName')
        cy.contains('Rating Class')
        cy.contains('Overall Rating')

        cy.get('[name=course]')
        .type('Computer Science')

        cy.contains('Search')
        .click()


        cy.contains('Ashish Aggarwal')
        cy.contains('Next').click()
        cy.contains('Next').click()
        cy.contains('Next').click()

        cy.visit('/academics/profs')

        cy.get('[name=prof]')
        .type('Alin')

        cy.contains('Search')
        .click()

        cy.contains('Alin Dobra')
        cy.contains('good')







     })




  })