export class Like{
    clicklike = function () {
        expect(cy.contains('Like'),"Text is missing");
        expect(cy.contains('Follow'),"Text is missing");
        expect(cy.contains('Share'),"Text is missing");
        cy.get('button.likeButton').contains('Like').click({ position: 'center' }).click({ force: true });
        setInterval(6000);
        expect(cy.contains('Liked'),"Text is missing");
    }
}
