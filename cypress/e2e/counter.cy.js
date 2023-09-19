describe('Counter Component', () => {
  it('increments and decrements the counter correctly', () => {
    cy.visit('http://localhost:3000');

    cy.get('#counterValue').should('have.text', 'Value: 10');

    cy.contains('Increment').click();
    cy.get('#counterValue').should('have.text', 'Value: 11');

    cy.contains('Decrement').click();
    cy.get('#counterValue').should('have.text', 'Value: 10');
  });
});
