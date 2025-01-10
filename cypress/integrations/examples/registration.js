/// <reference types='cypress' />

const { eq } = require("lodash");

describe('registration', function() {

    it('First Step', function() {
        cy.changeLanguage('English')
        cy.get('.no-account').should('be.visible').click();
        cy.wait(2000)
        //Assert with url 
        cy.url().should('include', '/auth/register')
        cy.get('.back-btn').should('have.css', 'pointer-events', 'auto'); // To check if it's clickable
        cy.get('.title-wrapper').should('contain.text',"Apprenticeship");
        //cy.get('.wh-paragraph-md').should('contain.text','Have you completed an apprenticeship or are you currently pursuing one?');
        
        cy.get('li.ng-star-inserted').then(($buttons) => {
            expect($buttons).to.have.length(4); // Assert total number of buttons
          
            // Assert text for each button
            expect($buttons.eq(0)).to.contain.text('Currently pursuing an apprenticeship');
            expect($buttons.eq(1)).to.contain.text('Completed apprenticeship');
            expect($buttons.eq(2)).to.contain.text('Technician / Master');
            expect($buttons.eq(3)).to.contain.text('No');
            
          });
        cy.get('li.ng-star-inserted').eq(3).click();  
        //cy.get('.ng-star-inserted.li').eq(1).click();
        cy.contains('No').click();
        cy.contains('.selection-list--item').click();

    })

    //it('register with google', function() {

       
    //})
    
})