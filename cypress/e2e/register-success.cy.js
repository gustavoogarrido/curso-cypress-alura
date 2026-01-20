describe('Register function', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  it('Should register a new account successfully', () => {
    cy.register('Gustavo', 'gustavo21@exemplo.com', '@Gustavo123');
  })
})

describe('Adoption list function', () => {
  it.skip('Should list pets to adopt', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.contains('a', 'Falar com responsável').click()
  })
})

describe('Header buttons', () => {
  it('Should take to home and take to message form', () => {
    //Login
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Fazer login').click();
    cy.get('input[name=email]').type('gustavo2@exemplo.com');
    cy.get('input[name=password]').type('@Gustavo123');
    cy.contains('button', 'Entrar').click();

    //Header buttons
    cy.get('.header__home').click()
    cy.get('.header__message').click()
  })
})