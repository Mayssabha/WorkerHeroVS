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

Cypress.Commands.add('changeLanguage', (languageCode) => {
    cy.visit('/auth/login');
    cy.get('.right > .ng-star-inserted > .language-wrapper')
        .should('be.visible')
        .click();             

    cy.get('.languages-list-container').should("be.visible", { timeout: 10000 })
    
    cy.contains('.languages-list-container p',languageCode)
        .should('be.visible')
        .click();
    cy.wait(2000);    
    //Assert that the language has changed 
    cy.get('#navbar').should('contain.text',languageCode)


})


