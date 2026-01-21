describe('API Adopet', () => {
    const time = Math.random() * 1000;
    const authorization = Cypress.env('authorization')

    it('API messages', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/a9c101ea-c0f4-41df-9350-485607a55399',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
            expect(res.duration).to.be.lte(time)
        })
    })
})