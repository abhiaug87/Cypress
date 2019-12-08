export class SendMessage{
    sendingMessage = function () { 
       expect( cy.get('Messages'),"Element is missing");
       cy.get('Messages').click({force:true});
       setInterval(9000);
    }
}