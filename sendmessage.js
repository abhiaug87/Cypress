export class SendMessage{
    sendingMessage = function () { 
      expect(cy.contains('Messages'),"Text is missing");
      cy.contains('Messages').click({ force: true });
      setInterval(9000);
      expect(cy.contains('See all in Messenger' ),"Text is missing");
    }
}