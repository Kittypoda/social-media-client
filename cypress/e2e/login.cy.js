describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('allows the user to log in with valid credentials', () => {
    cy.get('#loginEmail').type('odaoda@stud.noroff.no');
    cy.get('#loginPassword').type('123456789');

    cy.get('#loginForm').submit();

    cy.get('body').should('have.class', 'logged-in');
  });
});
