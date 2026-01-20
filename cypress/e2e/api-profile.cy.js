describe('Testing profiles calls and loads', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhOWMxMDFlYS1jMGY0LTQxZGYtOTM1MC00ODU2MDdhNTUzOTkiLCJhZG9wdGVyTmFtZSI6Ikd1c3Rhdm8yIiwiaWF0IjoxNzY4OTI1MDA5LCJleHAiOjE3NjkxODQyMDl9.zeLG5aOXFRYqKmeIh1XR007TfrcuA47HR_KUvNkIanY'

    // beforeEach(() => {
    //     cy.visit('https://adopet-frontend-cypress.vercel.app/login')
    //     cy.login('gustavo2@exemplo.com', '@Gustavo123');
    // });

    it('Must have user name in response', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/a9c101ea-c0f4-41df-9350-485607a55399',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('perfil');
            expect(res.body.perfil.name).to.be.equal('Gustavo2')
        })
    })
})