declare global {
  namespace Cypress {
    interface Chainable {
      signInShell(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('signInShell', () => {
  cy.visit('/signin');
});

export {};
