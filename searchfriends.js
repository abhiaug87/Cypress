export class SearchFriends{
 searchfriends = function () {
   expect(cy.contains('input').click({ position: 'topLeft' }),"Element is missing");
   cy.contains('input').click({ position: 'topLeft' }).click({ force: true }).type('Akshay Sud');
  
 }
}