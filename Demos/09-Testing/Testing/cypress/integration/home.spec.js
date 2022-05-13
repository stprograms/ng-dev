/// <reference types="Cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('https://localhost:4200/');
  });

  describe('My Bogus Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    });
  });

  describe('Intro', () => {
    it('Has the correct Title', () => {
      cy.get('.mat-card-title').should(
        'contain.text',
        'Angular - Single Page Application Development'
      );
    });
  });
});
