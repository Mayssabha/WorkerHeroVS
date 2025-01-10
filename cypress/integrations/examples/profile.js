import LoginPage from "../../support/pageObjects/LoginPage";

describe('Applicant profile', function () {
   // before(() => {
       // cy.visit('https://app.test.workerhero.com/auth/login');
        //cy.changeLanguage('English');
        //LoginPage.login('workerherotesti+111@gmail.com', 'Workerhero!123','Success');
        
 
   // })

    it('Edit profile', function() {
        const name = `Mayssa`;
        const lname = "Hi";
        const address = "Bern";
        const dateOfBirth = "28-01-2004"
        LoginPage.login('workerherotesti+111@gmail.com', 'Workerhero!123','Success');
        cy.contains('Go to profile').click();
        cy.wait(2000);
        cy.url().should('include','/profile');
        cy.get('[name="edit"]').click(); 
        cy.get('[formcontrolname="firstName"]').type('{selectAll}{backspace}').type(name);
        cy.get('[formcontrolname="lastName"]').type('{selectAll}{backspace}').type(lname);
        cy.get('.autocomplete--input').type('{selectAll}{backspace}').type(address);
        cy.get('#ngb-typeahead-0-1').click();
        cy.get('input[type="date"]').invoke('val', '1990-01-01').trigger('change');
        // cy.get('[formcontrolname="dob"]').clear().type(dateOfBirth); 
        cy.get('wh-s-nationality').type('Eg');
        cy.get('[role=option]').eq(1).click();
        cy.contains('button','Submit').click();
        cy.get('.alert-item').should('contain','Success');

    
    })
 })
