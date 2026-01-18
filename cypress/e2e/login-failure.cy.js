describe('Login function', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"').click();
  })

  it('Should display two errors', () => {
    // cy.get('[data-test="input-loginEmail"]').type('gustavo2@exemplo.com');
    // cy.get('[data-test="input-loginPassword"]').type('@Gustavo123');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Insira sua senha').should('be.visible')
  });

  it('Should display format error in each field', () => {
    cy.get('[data-test="input-loginEmail"]').type('email');
    cy.get('[data-test="input-loginPassword"]').type('senha');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible')
    cy.contains(
        'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres'
    ).should('be.visible')
  })
})