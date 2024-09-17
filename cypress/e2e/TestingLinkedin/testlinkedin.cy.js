describe("LinkedIn.com", () => {
    it("Login folosind credentiale gresite", () => {
        cy.visit('https://www.linkedin.com');
        cy.get('.nav__button-secondary').click();

        cy.get('#username').type('tepup@tepup.ty');
        cy.get('#password').type('salaaraasd@');
        cy.get('.btn__primary--large').click();
    });
});