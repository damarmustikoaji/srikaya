const data = require('../../../fixtures/data_pet.json');

describe('@get @getPetDetailTest PET Get Detail Pet | GET', () => {
    describe('@positive', () => {
        it(`As a User, I should be able to successfully request GET detail pet using valid id ${data.petId}`, () => {
            cy.request('GET', '/v2/pet/'+data.petId).as('getRequest');
            cy.get('@getRequest').then(response => {
                expect(response.status).to.eq(200);
            });
        });
    });
    describe('@negative', () => {
        it(`As a User, I should not be able to successfully request GET detail pet using not found id ${data.petIdNotFound}`, () => {
            cy.request({
                method: 'GET', 
                url: '/v2/pet/'+data.petIdNotFound,
                failOnStatusCode: false
              }).then( ({ status }) => {
                expect(status).to.eq(404)
              })
        });
    });
});