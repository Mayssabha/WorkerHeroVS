/// <reference types='cypress' />
import LoginPage from "../../support/pageObjects/LoginPage";

describe('Applicant login', function() {
    it('Wrong login', function() {
        cy.changeLanguage('English') 
        LoginPage.login('workerherotesti+111@gmail.com', 'Workerhero!1','Error');
        cy.wait(2000);
       // cy.url().should('eq', 'https://app.test.workerhero.com/auth/login');
       // cy.get('')
    })
 
    it('Forget Password', function() {
        cy.changeLanguage('English') 
        //cy.get('wh-language-switch-new').select('.right > .ng-star-inserted')
        cy.get('.forgot-password-hint').click()
        //cy.url().should('eq', 'https://app.test.workerhero.com/auth/reset-password')
        cy.get('.wh-s-input').type('workerherotesti+111@gmail.com')
        cy.contains('button','Send reset email').click();
        cy.get('.wh-s-button--primary').should('be.disabled');


       // cy.get('')
    })
    
    it('Success login', function() {
        LoginPage.login('workerherotesti+111@gmail.com', 'Workerhero!123', 'Success');
        
        cy.on('window:alert', (str) => {
            //Mocha 
            expect(str).to.equal('Incorrect password')
        })
    })

})