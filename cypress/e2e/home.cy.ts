describe('home page', () => {
  it('renders template positioning', () => {
    cy.visit('/');
    cy.contains('Build web applications on a template that already respects boundaries.');
  });
});
