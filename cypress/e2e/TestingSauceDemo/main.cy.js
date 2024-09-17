//Automated tests for an example website
//using CypressJS
//Code was written by Alexandru-Daniel Eftenie

describe("SauceDemo.com", () => {
    
    
    it('Login using incorrect credentials work as expected', () => {

        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('parola123');
        login_button.click();

        cy.wait(500);

        //Checking that the user gets prompted with the error message after failed login attempt.
        cy.get('[data-test="error"]').should('be.visible');
    });

    it('Login using correct credentials work as expected', () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();


        //Asserting the fact that the application logo exists after the successful login.
        cy.get('.app_logo').should('exist');
    });


    it('Logout works as expected', () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();

        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();

        //Checking that after logout, the logo on the login page is visible.
        cy.get('.login_logo').should('exist');
    });

    //id X burger navbar => react-burger-cross-btn

    it('Hamburger navbar can be opened and closed', () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();

        cy.get('#react-burger-menu-btn').click();

        //Checking that after opening the hamburger navbar, the cross button is visible.
        cy.get('#react-burger-cross-btn').should('be.visible');


        cy.get('#react-burger-cross-btn').click();

        //Checking that after closing the hamburger navbar, the cross button is not visible anymore.
        cy.get('#react-burger-cross-btn').should('not.be.visible');
    });

    it('Product can be added successfully in the shopping cart', () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        //Checking that the value is incremented in the shopping cart badge
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    });

    it('Product can be removed successfully in the shopping cart', () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.wait(1000);
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();

        //Checking that the badge disappears when the product is deleted from the cart.
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
    });

    it('Shopping cart can be accessed by the users', () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        //Checking that the value is incremented in the shopping cart badge
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
        
        cy.get('[data-test="shopping-cart-link"]').click();
    });

    it('Continue shopping from the cart works as expected', () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        //Checking that the value is incremented in the shopping cart badge
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
        
        cy.get('[data-test="shopping-cart-link"]').click();
        
        cy.get('[data-test="continue-shopping"]').click();
    });

    it('User is able to buy a product', () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        //Checking that the value is incremented in the shopping cart badge
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
        
        cy.get('[data-test="shopping-cart-link"]').click();
        
        cy.get('[data-test="checkout"]').click();

        cy.get('[data-test="firstName"]').type('Alexandru');
        cy.get('[data-test="lastName"]').type('Popescu');
        cy.get('[data-test="postalCode"]').type('217220');

        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

        //Checking that the checkout title is visible to the user
        cy.get('[data-test="title"]').should('be.visible');

    });

    it('User is able to return to home page after placing an order', () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        //Checking that the value is incremented in the shopping cart badge
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
        
        cy.get('[data-test="shopping-cart-link"]').click();
        
        cy.get('[data-test="checkout"]').click();

        cy.get('[data-test="firstName"]').type('Alexandru');
        cy.get('[data-test="lastName"]').type('Popescu');
        cy.get('[data-test="postalCode"]').type('217220');

        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

        //Checking that the checkout title is visible to the user
        cy.get('[data-test="title"]').should('be.visible');

        //cy.get('[data-test="cancel"]')

        cy.get('[data-test="back-to-products"]').click();
    });

    it("User is able to view a product's page", () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();
       
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
    
        //Checking that product's description is visible
        cy.get('[data-test="inventory-item-desc"]').should('be.visible');
    });

    it("User is able to return to the main page from a product's page", () => {
        cy.visit('https://www.saucedemo.com/');

        const login_input = cy.get('[data-test="username"]');
        const password_input = cy.get('[data-test="password"]');
        const login_button = cy.get('[data-test="login-button"]');

        login_input.type('standard_user');
        password_input.type('secret_sauce');
        login_button.click();
       
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
    
        //Checking that product's description is visible
        cy.get('[data-test="inventory-item-desc"]').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();

        //Checking that the first element from the list of products is visible
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('be.visible');
    });
});