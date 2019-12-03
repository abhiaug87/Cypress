export class Notifications{
    notifications = function () {
        expect(cy.contains('Notifications'),"Text is missing");
        cy.contains('Notifications').click({ force: true });
        expect(cy.contains('Notifications'),"Text is missing");
        setInterval(9000);
        cy.contains('AUT Sport').click();
        setInterval(9000);
        expect(cy.contains('Like'),"Text is missing");
        expect(cy.contains('Follow'),"Text is missing");
        expect(cy.contains('Share'),"Text is missing");
        cy.contains('Like').click({ force: true });
        setInterval(9000);
        expect(cy.contains('Liked'),"Text is missing");
        setInterval(9000);
    }
}