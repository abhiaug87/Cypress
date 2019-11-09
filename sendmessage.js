export class SendMessage{
    sendingMessage = function () {
        expect( cy.get('div._1mf._1mj'),"Element is missing");
        cy.get('div._1mf._1mj').click().type('This is a test').type('{enter}');   
        setInterval(9000);
    }
}