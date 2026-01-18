describe('Login function', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"').click();
  })
  it('Should log in with the created account', () => {
    cy.get('[data-test="input-loginEmail"]').type('gustavo2@exemplo.com');
    cy.get('[data-test="input-loginPassword"]').type('@Gustavo123');
    cy.get('[data-test="submit-button"]').click();
  })
})