describe('Visiting home page', () => {
    it('Should load the home page', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.button').click();
        cy.get(':nth-child(1) > .card__contact').click()
    })
})
