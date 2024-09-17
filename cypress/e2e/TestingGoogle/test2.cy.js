describe("Google.com", () => {
    it("Testam o cautare simpla cu apasarea tastei Enter", () => {
        cy.visit("https://www.google.com");
        cy.get('#L2AGLb > .QS5gu').click();
        cy.wait(10000);
        cy.get('#APjFqb').type('Cristiano Ronaldo').type('{enter}');

        //
        cy.get('.sz3HNe > .T6zPgb > div > .mgAbYb').should('exist');
    });
});