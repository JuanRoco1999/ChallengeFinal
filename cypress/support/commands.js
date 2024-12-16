// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('completeCheckOut', (type = 'valid') => { 
    cy.fixture('datos').then((data) => {
        const formData = data[type]

    cy.get('[data-test="firstName"]').type(formData.name)
    cy.get('[data-test="lastName"]').type(formData.lastName)
    cy.get('[data-test="postalCode"]').type(formData.zip)
    cy.get('[data-test="continue"]').click()
    
    
})
})