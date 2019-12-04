export class Notifications{
    clicknotifications = function () {
        expect(cy.contains('Notifications'),"Text is missing");
        cy.contains('Notifications').click({ force: true });
        expect(cy.contains('Notifications'),"Text is missing");
        setInterval(9000);
        cy.contains('AUT Sport').click();
        setInterval(9000);
    }
}