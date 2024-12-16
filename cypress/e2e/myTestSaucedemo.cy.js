const { beforeEach } = require("mocha");

describe('tests1',{testIsolation:false}, () => {
    it('Iniciar sesion', () => {

        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.wait(2000)
        
    });

    it('Agregar los productos al carrito', () => {
    
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        
    });

    it('Hacer el checkout y validarlo', () => {
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click()
        cy.completeCheckOut('valid');
        cy.wait(2000)
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="title"]').contains('Checkout: Complete!')
    
    });

    it('Realizar el logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.wait(2000)
    });

    it('Iniciar sesion usuario2', () => {
        cy.get('[data-test="username"]').type('problem_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.wait(2000)
    });

    it('Agregar los productos al carrito', () => {
    
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        
    });

    it('Hacer el checkout y validarlo', () => {
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click()
        cy.completeCheckOut('valid');
        cy.wait(2000)
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="title"]').contains('Checkout: Complete!')
    
    });

    it('Realizar el logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.wait(2000)
    });

});

