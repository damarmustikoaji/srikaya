const data = require('../../../fixtures/data_pet.json');

describe('@get @getFindByStatusTest Petstore Find By Status | GET', () => {
    describe('@positive', () => {
        it(`As a User, I should be able to successfully request GET find by status - ${data.findByStatus[0]}`, () => {
            cy.request('/v2/pet/findByStatus?status='+data.findByStatus[0]).as('getRequest');
            cy.get('@getRequest').then(response => {
                expect(response.status).to.eq(200);
            });
        });
        it(`As a User, I should be able to successfully request GET find by status - ${data.findByStatus[1]}`, () => {
            cy.request('/v2/pet/findByStatus?status='+data.findByStatus[1]).as('getRequest');
            cy.get('@getRequest').then(response => {
                expect(response.status).to.eq(200);
            });
        });
        it(`As a User, I should be able to successfully request GET find by status - ${data.findByStatus[2]}`, () => {
            cy.request('/v2/pet/findByStatus?status='+data.findByStatus[2]).as('getRequest');
            cy.get('@getRequest').then(response => {
                expect(response.status).to.eq(200);
            });
        });
    });
});