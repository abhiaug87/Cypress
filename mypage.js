export class MyPage{
    clickmypage = function () {
        expect(cy.contains('Testing page'),"Text is missing");
        cy.contains('Testing page').click();
    }
}