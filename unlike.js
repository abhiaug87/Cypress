export class Unlike{
    clickunlike = function () {
        expect(cy.contains('Liked', { timeout: 60000 }),"Text is missing");
        cy.contains('Liked').trigger('mouseover');
        expect(cy.contains('Unlike this Page'),"Text is missing");
        cy.contains('Unlike this Page').click();
        expect(cy.contains('You have unliked this Page'),"Text is missing");
        expect(cy.contains('You have unliked AUT Sport and will no longer see posts from this Page in your News Feed.'),"Text is missing");
        expect(cy.contains('Find support or report Page'),"Text is missing");
        expect(cy.contains('Done'),"Text is missing");
        setInterval(9000);
        cy.contains('Done').click();
        setInterval(9000);
    }
}