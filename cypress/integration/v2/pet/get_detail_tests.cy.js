const data = require('../../../fixtures/data_pet.json');
const { randomNumber } = require('../../../support/random_characters');

let petId;

describe('@get @getPetDetailTest PET Get Detail Pet | GET', () => {
    before('Preconditions detail', () => {
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
        it('As a User, I should be able to successfully request GET detail pet using valid id', () => {
            cy.request('GET', '/v2/pet/'+petId).as('getRequest');
            cy.get('@getRequest').then(response => {
                expect(response.status).to.eq(200);
            });
        });
    });
    describe('@negative', () => {
        it('As a User, I should not be able to successfully request GET detail pet using not found id', () => {
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