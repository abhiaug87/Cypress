export class ViewProfile{
    viewprofile = function () {
        expect(cy.contains('Abhishek'),"Text is missing");
        cy.contains('Abhishek').click();
        expect(cy.contains('Abhishek Kulkarni'),"Text is missing");
        expect(cy.contains('Edit Profile'),"Text is missing");
        expect(cy.contains('Activity Log'),"Text is missing");
        expect(cy.contains('Studied at AUT - Auckland University of Technology'),"Text is missing");
        expect(cy.contains('Went to St Mary'),"Text is missing");
        expect(cy.contains('Lives in Auckland, New Zealand'),"Text is missing");
        expect(cy.contains('From Mumbai, Maharashtra'),"Text is missing");
        expect(cy.contains('Edit Details'),"Text is missing");
        setInterval(9000);
    }
}