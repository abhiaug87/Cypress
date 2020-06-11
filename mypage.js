export class MyPage{
    clickmypage = function () {
        expect(cy.contains('Notifications'),"Text is missing");
        cy.contains('Notifications').click({ force: true });
        expect(cy.contains('Notifications'),"Text is missing");
        setInterval(9000);
        cy.contains('Testing page').click();
        setInterval(9000);
    }
}