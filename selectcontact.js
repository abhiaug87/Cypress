export class SelectContact{
    selectingcontact = function () {
        setInterval(9000);
       cy.contains('This is a test').trigger('mouseover').click({position: 'left', force: true});
       setInterval(9000);
       expect( cy.get('div._1mf._1mj'),"Element is missing");
       cy.get('div._1mf._1mj').click().type('This is a test').type('{enter}');  
       setInterval(9000);
    }
}