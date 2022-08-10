const data = require('../../../fixtures/data_pet.json');

let deletePetId;

describe('@delete @deletePetTest PET Delete a pet | DELETE', () => {
    before('Preconditions delete', () => {
        cy.request({
            method: 'POST', 
            url: '/v2/pet',
            body: data.postPet.valid
          }).as('getRequest');
          cy.get('@getRequest').then(response => {
            deletePetId = response.body.id;
            expect(response.status).to.eq(200);
        });
    });
    describe('@positive', () => {
        it('As a User, I should be able to successfully request DELETE a pet using valid id', () => {
            cy.request({
                method: 'DELETE', 
                url: '/v2/pet/'+deletePetId,
                headers: {
                    'accept': 'application/json',
                    'api_key': 'damar'
                }
              }).then( ({ status }) => {
                expect(status).to.eq(200)
              })
        });
    });
    describe('@negative', () => {
        it('As a User, I should not be able to successfully request DELETE a pet using not found id', () => {
            cy.request({
                method: 'DELETE', 
                url: '/v2/pet/'+data.petIdNotFound,
                failOnStatusCode: false,
                headers: {
                    'accept': 'application/json',
                    'api_key': 'damar'
                }
              }).then( ({ status }) => {
                expect(status).to.eq(404)
              })
        });
    });
});