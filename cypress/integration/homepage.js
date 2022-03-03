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
      cy.visit("/landing") // I'll talk about custom commands in another post. Stay tuned!
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

        cy.get("Button").should('be.visible').click()

      cy.contains('You will receive an email to finish the purchase.')
        .should('be.visible')
    })
  })