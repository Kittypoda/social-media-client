describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1000);
  });

  it('allows the user to log in with valid credentials', () => {
    cy.get('#loginEmail').type('odaoda@stud.noroff.no');

    cy.get('#loginPassword').type('123456789');

    cy.get('#loginForm').submit();

    cy.get('body').should('have.class', 'logged-in');
  });

  it('displays an error message for invalid login credentials', () => {
    cy.get('#loginEmail').type('invalid@stud.noroff.no');

    cy.get('#loginPassword').type('12345678');

    cy.get('#loginForm').submit();

    cy.get('#errorMessage').should('contain', 'is incorrect');
  });
});
