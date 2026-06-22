describe('auth shell', () => {
  it('renders sign in form', () => {
    cy.signInShell();
    cy.contains('Welcome back');
  });
});
