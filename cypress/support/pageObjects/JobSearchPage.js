class JobSearchPage {
  get searchPage() {
    return cy.contains('nav','jobs').click();

  }
}