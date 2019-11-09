  export class LandingPage {
     verifyLandingPage = function () {
        expect(cy.contains('See More...'),"Text is missing");
        cy.contains('See More...').click();
        setInterval(9000);
        expect(cy.contains('Abhishek'),"Text is missing");
        cy.contains('Abhishek').click({force:true});
        setInterval(9000);
    }
  }