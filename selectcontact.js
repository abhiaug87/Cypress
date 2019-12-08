export class SelectContact{
    selectingcontact = function () {
       cy.contains('Atinder Bal').click({position: 'bottomLeft', force: true});
       setInterval(9000);
       expect( cy.get('div._1mf._1mj'),"Element is missing");
       cy.get('div._1mf._1mj').click().type('This is a test').type('{enter}');  
       setInterval(9000);
    }
}