  export class LoginPage 
  {
   enterLoginCredentials = function () {
      if(cy.contains('Email or phone'))
      {
     expect(cy.contains('Email or phone'),"Text is missing");
     expect(cy.contains('Password'),"Text is missing");
     expect(cy.contains('Email or phone').click().type('kulkarniabhishek23887@gmail.com'));
     
     }
      else if(cy.contains('Abhishek'))
     {
     expect(cy.contains('Abhishek'),"Text is missing");
     expect(cy.contains('Abhishek').click()); 
     expect(cy.contains('Password'),"Text is missing");
  
     }
     else if(cy.contains('Email address or phone number')) 
     {
     expect(cy.get('text').contains('Email address or phone number'),"Text is missing");
     expect(cy.get('text').contains('Email address or phone number').click({ force:true }).type('kulkarniabhishek23887@gmail.com'));
     expect(cy.get('text').contains('Password'),"Text is missing");
     expect(cy.get('text').contains('Password').click({ force:true }).type('Testmycode123'));
  
    }
 }

   submitCredentials = function () {
    expect(cy.contains('Log In'),"Text is missing");
    expect(cy.contains('Password').click().type('Testmycode123'));
    expect(cy.contains('Log In').click());
   }
}