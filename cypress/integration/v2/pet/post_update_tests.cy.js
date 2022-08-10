const data = require('../../../fixtures/data_pet.json');
const { randomNumber } = require('../../../support/random_characters');

let petId;

describe('@post @postUpdatePet Petstore Update Pet | POST', () => {
    before('Preconditions update', () => {
        data.postPet.valid.id = randomNumber(100, 999)
        cy.request({
            method: 'POST', 
            url: '/v2/pet',
            body: data.postPet.valid
          }).as('getRequest');
          cy.get('@getRequest').then(response => {
            petId = response.body.id;
            expect(response.status).to.eq(200);
        });
    });
    describe('@positive', () => {
        it('As a User, I should be able to successfully request POST update pet using valid data', () => {
            cy.request({
                method: 'POST', 
                url: '/v2/pet/'+petId,
                form: true,
                body: {
                    name: data.name,
                    status: data.status
                }
              }).as('getRequest');
              cy.get('@getRequest').then(response => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq(petId.toString());
            });
        });
    });
    describe('@negative', () => {
        it('As a User, I should not be able to successfully request POST update pet using not found id', () => {
            cy.request({
                method: 'POST', 
                url: '/v2/pet/'+data.petIdNotFound,
                failOnStatusCode: false,
                form: true,
                body: {
                    name: data.name,
                    status: data.status
                }
              }).as('getRequest');
              cy.get('@getRequest').then(response => {
                expect(response.status).to.eq(404);
                expect(response.body.message).to.eq('not found');
            });
        });
    });
});