export class SelectContact{
    selectingcontact = function () {
       expect(cy.contains('Akshay Sud'),"Text is missing");
       cy.contains('Akshay Sud').click({force:true});
       expect( cy.get('div._1mf._1mj'),"Element is missing");
       cy.get('div._1mf._1mj').click().type('This is a test').type('{enter}');  
       setInterval(9000);
    }
}