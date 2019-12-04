export class SearchFriends{
 searchfriends = function () {
   expect(cy.contains('text').click({ position: 'topLeft' }),"Element is missing");
   cy.contains('input').click({ position: 'topLeft' }).click({ force: true }).type('Akshay Sud');
  
 }
}