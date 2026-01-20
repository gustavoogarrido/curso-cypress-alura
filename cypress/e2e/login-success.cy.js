describe('Login function', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"').click();
  })
  it('Should log in with the created account', () => {
    cy.login('gustavo2@exemplo.com', '@Gustavo123');
  })
})