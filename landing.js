  export class LandingPage {
     verifyLandingPage = function () {
        expect(cy.contains('See more...'),"Text is missing");
        cy.contains('See more...').click();
        setInterval(9000);
      
    }
  }