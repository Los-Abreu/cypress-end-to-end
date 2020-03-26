describe('Test our inputs and submit our form', function(){
    beforeEach(function() {
        cy.visit('http://localhost:3000/')
    })
    it('Add test to inputs and submit form', function(){
        cy.get('input[name="name"]')
        .type("Carlos")
        .should('have.value', "Carlos");
        cy.get('input[name="email"]')
        .type("email@email.com")
        .should('have.value', "email@email.com")
        cy.get("textarea")
        .type("I want to help")
        .should('have.value', "I want to help")
        cy.get("#positions")
        .select("Yard Work")
        .should('have.value', "Yard Work")
        cy.get("[type='checkbox']").check()
        .should('be.checked');
        cy.get("button").click();
    });
})