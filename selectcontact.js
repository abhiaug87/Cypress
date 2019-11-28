export class SelectContact{
    selectingcontact = function () {
       expect(cy.contains('Atinder Bal'),"Text is missing");
       cy.contains('Atinder Bal').click({force:true});
       setInterval(9000);
    }
}