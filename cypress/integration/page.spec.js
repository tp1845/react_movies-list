import movies from '../../src/api/movies.json'

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have 5 films on it', () => {
    cy.getByDataCy('card')
      .should('have.length', movies.length);
  });

  it('should contain films with images', () => {
    cy.getByDataCy('card')
      .find(`[src="${movies[0].imgUrl}"]`)
      .should('exist');
  });

  it('should contain films with title of the film', () => {
    cy.getByDataCy('card')
      .selectElement('title')
      .should('contain', movies[0].title);
  });

  it('should contain films with description of the film', () => {
    cy.getByDataCy('card')
      .selectElement('description')
      .should('contain', movies[0].description);
  });

  it('should contain films with description of the film', () => {
    cy.getByDataCy('card')
      .find(`[href="${movies[0].imdbUrl}"]`)
      .should('exist');
  });
});
