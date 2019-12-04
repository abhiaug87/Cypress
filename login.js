  export class LoginPage 
  {
   enterLoginCredentials = function () {
      if(cy.contains('Email or Phone'))
      {
     expect(cy.contains('Email or Phone'),"Text is missing");
     expect(cy.contains('Password'),"Text is missing");
     expect(cy.contains('Email or Phone').click().type('abc1234567@gmail.com'));
     
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
     expect(cy.get('text').contains('Email address or phone number').click({ force:true }).type('abc1234567@gmail.com'));
     expect(cy.get('text').contains('Password'),"Text is missing");
     expect(cy.get('text').contains('Password').click({ force:true }).type('blahblah'));
  
    }
 }

   submitCredentials = function () {
    expect(cy.contains('Log In'),"Text is missing");
    expect(cy.contains('Password').click().type('blahblah'));
    expect(cy.contains('Log In').click());
   }
}
