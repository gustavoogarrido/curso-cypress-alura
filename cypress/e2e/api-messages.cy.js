describe('API Adopet', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhOWMxMDFlYS1jMGY0LTQxZGYtOTM1MC00ODU2MDdhNTUzOTkiLCJhZG9wdGVyTmFtZSI6Ikd1c3Rhdm8yIiwiaWF0IjoxNzY4OTI1MDA5LCJleHAiOjE3NjkxODQyMDl9.zeLG5aOXFRYqKmeIh1XR007TfrcuA47HR_KUvNkIanY'

    it('API messages', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/a9c101ea-c0f4-41df-9350-485607a55399',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})