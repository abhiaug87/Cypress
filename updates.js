export class Updates{
    checkupdates = function () {
        expect(cy.contains('div._2n_9'),"Element is missing");
        cy.contains('div._2n_9').click({force:true});
        expect(cy.contains('div._4l_v'),"Element is missing");
        cy.contains('div._4l_v').click({force:true});
        setTimeout(9000);
    }
}