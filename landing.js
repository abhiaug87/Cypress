  export class LandingPage {
     verifyLandingPage = function () {
        expect(cy.contains('See More...'),"Text is missing");
        cy.contains('See More...').click();
        setInterval(9000);
      
    }
  }