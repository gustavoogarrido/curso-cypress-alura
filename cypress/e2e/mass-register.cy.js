import { usuarios } from '../fixtures/usuarios.json'

describe('Resgister page with mass data', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })

    usuarios.forEach(usuario => {
        it('Must fill the correct fields in register form to register a user', () => {
            cy.register(usuario.name, usuario.email, usuario.password);
        })
    })
})