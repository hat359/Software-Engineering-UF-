describe("renders the homepage",()=>{
it("renders correctly",()=>{
cy.visit('/landing')
cy.get("#container").should("exist")

})

it("gets headings",()=>{
cy.contains("Finance")
cy.contains("Academics")
cy.contains("Travel")


})

})


describe('Get started', () => {
    beforeEach(() => {
      cy.visit("/landing") 
    })
  
    it('is redirected to the register page', () => {
      cy.contains('Get Started')
        .should('be.visible')
        .click()
  
      cy.url()
        .should('be.equal', 'http://localhost:3000/signup')
    })
  })

  
  describe('Register', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/signup')
    })
  
    it('successfully registers', () => {
      cy.get('.fname')
        .should('be.visible')
        .type('John Doe')
      cy.get('.lname')
        .should('be.visible')
        .type('Musk')
      cy.get('.email')
        .should('be.visible')
        .type('you.example@gmail.com')
      cy.get('.address')
        .should('be.visible')
        .type("1234 NW 45 AVE apt F")

        cy.get('.zip')
        .should('be.visible')
        .type("32601")
  
        cy.get('.contact')
        .should('be.visible')
        .type("352-652-7843")

        cy.get('#nextbut').click()

        cy.get('.Course1')
        .should('be.visible')
        .type('HCI')

        cy.get('.Course2')
        .should('be.visible')
        .type('SE')

        cy.get('.Course3')
        .should('be.visible')
        .type('CN')
      
        cy.get('#nextbut').should('be.visible').click()

        cy.get('.username').should('be.visible').type('qrwyt')
        cy.get('.pass').should('be.visible').type('123456')

        cy.get('#nextbut').should('be.visible').click()

      
        cy.url()
        .should('be.equal', 'http://localhost:3000/signin')


      })
  })


  describe('signs ',()=>{
    beforeEach(() => {
      cy.visit('http://localhost:3000/signin')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
      });

    it('signs in correctly',()=>{

      cy.get('.email').should('be.visible').type('abc@xyz.com')
    cy.get('.pass').should('be.visible').type('123456')

      cy.get('Button').click()

    })
    

  })