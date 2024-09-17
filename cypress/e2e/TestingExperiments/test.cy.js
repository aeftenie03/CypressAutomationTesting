describe('Suita de teste 1', () => {
    it('Testare utilizand constanta', () => {
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb > .QS5gu').click();
        const googleSearch = cy.get('#APjFqb');

        googleSearch.type('123').type('{esc}');
        googleSearch.should('have.value', 123);
    });
});