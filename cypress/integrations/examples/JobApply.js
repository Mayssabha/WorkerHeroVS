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
        cy.get('wh-ap-job-item').eq(0).invoke('text').as('JobTitle');
        cy.get('wh-ap-job-item').eq(0).contains('View details').click();
        cy.wait(2000);
        cy.contains('Job description').should('be.visible');
        cy.get('.wh-header-md').invoke('text').should('eq',this.JobTitle);
        
        cy.contains('Apply').click();
        //cy.get('.wh-s-modal').should('be.visible');
    })
})