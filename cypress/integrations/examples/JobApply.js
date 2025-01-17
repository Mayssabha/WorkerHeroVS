import LoginPage from "../../support/pageObjects/LoginPage";

describe('Job Apply', function () {

   // before(() => {
       // cy.visit('https://app.test.workerhero.com/auth/login');
      //  cy.changeLanguage('English');
      //  LoginPage.login('workerherotesti+111@gmail.com', 'Workerhero!123','Success');
  //  })

    it('Apply for a job', function() {
        //cy.changeLanguage('English');

        LoginPage.login('workerherotesti+111@gmail.com', 'Workerhero!123','Success');
        cy.contains('wh-s-nav-bottom-item','Jobs').click();
       // cy.wait(2000);
        cy.url().should('include','/jobs');
        cy.get('wh-s-search').type('Tes');
        cy.contains('button','Search').click();
        cy.get('.job-list').should('be.visible');
        cy.get('wh-ap-job-item').eq(0).invoke('text').then((JobTitle) => {
        cy.get('wh-ap-job-item').eq(0).contains('View details').click().then(() => {
            
            cy.wait(6000);
            cy.get('.go-back-btn').should('be.visible');
            cy.get('.wh-header-md').invoke('text').then((text) => {
                expect(text).to.should('contain',JobTitle);
            });
            //should('contain',JobTitle);
        });
        //cy.wait(6000);
        //cy.get('.go-back-btn').should('exist');
       // cy.get('.go-back-btn').click();
       // cy.get('.wh-header-md').invoke('text').should('eq',JobTitle);
    });
        cy.contains('Apply')//.click();
        //cy.get('.wh-s-modal').should('be.visible');
    })
})