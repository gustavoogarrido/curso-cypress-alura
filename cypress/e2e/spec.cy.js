describe('Register function', () => {
  it.skip('Should register a new account successfully', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Gustavo');
    cy.get('input[name="email"]').type('gustavo21@exemplo.com');
    cy.get('input[name="password"]').type('@Gustavo123');
    cy.get('input[name="confirm_password"]').type('@Gustavo123');
    cy.contains('button', 'Cadastrar').click()
  })
})

describe('Login function', () => {
  it.skip('Should log in with the created account', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Fazer login').click();
    cy.get('input[name=email]').type('gustavo2@exemplo.com');
    cy.get('input[name=password]').type('@Gustavo123');
    cy.contains('button', 'Entrar').click();
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