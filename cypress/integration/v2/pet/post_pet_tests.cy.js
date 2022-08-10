const data = require('../../../fixtures/data_pet.json');

describe('@post @postCreatePet Petstore Create Pet | POST', () => {
    describe('@positive', () => {
        it('As a User, I should be able to successfully request POST create pet', () => {
            cy.request('POST', '/v2/pet', data.postPet.valid).as('postRequest');
            cy.get('@postRequest').then(response => {
                expect(response.status).to.eq(200);
            });
       });
    });
});