describe('Logout Test', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.window().then((win) => {
      win.localStorage.setItem('token', 'fake-token');
      win.localStorage.setItem('profile', JSON.stringify({ name: 'Oda Oda' }));
    });
  });

  it('removes token and profile from storage when logout button is clicked', () => {
    cy.get('[data-auth="logout"]').click();

    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.be.null;
      expect(win.localStorage.getItem('profile')).to.be.null;
    });
  });
});
