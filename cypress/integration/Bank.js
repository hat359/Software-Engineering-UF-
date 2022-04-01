describe('Bank',()=>{
    beforeEach(() => {
        cy.visit("/BankAccount") 
      })
      it('has an image div', () => {
       
        
        cy.get('.fin').find('img').should('be.visible').should('have.css','width')
        
       })

       it('has a Container with class Bacc', () => {
       
        
        cy.get('.Bacc').find('img').should('be.visible')
        cy.get('.Bacc')
        .should('be.visible')
        .should('have.css', 'width')
        
        cy.get('#contain')
        .should('have.css','marginTop').get('#item')
        
        cy.contains('Book Your Appointment at Wells Fargo')

        cy.contains('Book an Appointment')
        .click()

        cy.contains("Application Received")
        cy.contains("Processing")
        cy.contains("Processed")

        cy.get('.fname')
        .should('be.visible')
        .type('John ')
        cy.get('.lname')
        .should('be.visible')
        .type('Doe')
        cy.get('.email')
        .should('be.visible')
        .type('xyz@abc')
        cy.get('.address')
        .should('be.visible')
        .type('sf feyfoie f')
        cy.get('.contact')
        .should('be.visible')
        .type('298469348')
        cy.get('.passport')
        .should('be.visible')
        .type('893463924')
        cy.get('.zip')
        .should('be.visible')
        .type('46389')
        cy.get('.ufid')
        .should('be.visible')
        .type('38746993')

        cy.contains("Next").click()
        cy.contains("Next").click()
        cy.contains("Submit").click()




    
    })



    })