describe('travel page',()=>{
     beforeEach(() => {
        cy.visit("/travel") 
       })

       
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        });

      it('Before Travel info', () => {


        cy.contains('Before you Travel').click()
        
       })

       it('During Travel info', () => {

        
        cy.contains('During Travel').click()
        
       })

       it('After Travel info', () => {
        
        cy.contains('After you Land').click()
       })
    
       it('has a table', () => {
       
        cy.get('.table').should('be.visible')

        
       })

       //Cypress.on('uncaught:exception', (err, runnable) => {
        //return false;
        //});

       it('view answers works properly', () => {
        cy.contains('View Answer').click()

       
        //cy.get('.anstext').should('exist')

        
       })




})