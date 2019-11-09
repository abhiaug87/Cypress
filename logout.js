export class LogoutPage{
    logout = function () {
        expect(cy.contains('Account Settings'),"Text is missing");
        cy.contains('Account Settings').click();
        expect(cy.contains('Log Out'),"Text is missing");
        cy.contains('Log Out').click();
    }
}