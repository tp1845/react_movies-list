describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should contain initial view', () => {
    cy.document().matchImageSnapshot();
  });
});
