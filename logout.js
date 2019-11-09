export class LogoutPage{
    logout = function () {
        expect(cy.contains('Account Settings'),"Text is missing");
        cy.contains('Account Settings').click({force:true});
        expect(cy.contains('Log Out'),"Text is missing");
        setInterval(3000);
        cy.contains('Log Out').click({force:true});
    }
}