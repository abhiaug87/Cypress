export class SelectContact{
    selectingcontact = function () {
       expect(cy.contains('Akshay Sud'),"Text is missing");
       cy.contains('Akshay Sud').click();
    }
}