Cypress.Commands.add('register', (name, email, password) => {
    cy.get('[data-test="input-name"]').clear().type(name);
    cy.get('[data-test="input-email"]').clear().type(email);
    cy.get('[data-test="input-password"]').clear().type(password);
    cy.get('[data-test="input-confirm-password"]').clear().type(password);
    cy.get('[data-test="submit-button"]').click()
})

Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-test="input-loginEmail"]').clear().type(email);
    cy.get('[data-test="input-loginPassword"]').clear().type(password);
    cy.get('[data-test="submit-button"]').click();
})

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