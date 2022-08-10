const data = require('../../../fixtures/data_pet.json');

describe('@put @putUpdateTest Petstore Update an existing pet | PUT', () => {
    describe('@positive', () => {
        it('As a User, I should be able to successfully request PUT update pet', () => {
            cy.request('PUT', '/v2/pet', data.putPet.valid).as('putRequest');
            cy.get('@putRequest').then(response => {
                expect(response.status).to.eq(200);
            });
       });
    });
});