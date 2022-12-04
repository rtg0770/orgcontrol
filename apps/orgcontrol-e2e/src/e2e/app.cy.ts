import { getSpirits, getAddSpiritButton } from '../support/app.po';

describe('orgcontrol', () => {
  beforeEach(() => cy.visit('/'));

  it('should display spirits', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getSpirits().should((t) => expect(t.length).equal(3));
    getAddSpiritButton().click();
    getSpirits().should((t) => expect(t.length).equal(4));
  });
});