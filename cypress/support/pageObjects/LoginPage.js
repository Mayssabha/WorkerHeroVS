class LoginPage {
   
  
    
  
    login(username, password, status) {
      cy.changeLanguage('English') 
      //cy.visit('/login'); // Navigate to the login page
      cy.get('.email-input').type(username); // Enter username
      cy.get('.password-input').type(password); // Enter password
      cy.contains('button','Log in').click();    // Submit the form
      cy.wait(2000);    
      cy.get('.alert-item').should('contain',status);
  
    }
  }
  
  export default new LoginPage();
  