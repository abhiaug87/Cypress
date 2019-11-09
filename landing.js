  export class LandingPage {
     verifyLandingPage = function () {
        expect(cy.contains('See More...'),"Text is missing");
        cy.contains('See More...').click();
         expect(cy.contains('Abhishek'),"Text is missing");
         cy.contains('Abhishek').click();
    }
  }