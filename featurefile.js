 import { LoginPage } from './login';
 import { LandingPage } from './landing';
 import { Updates } from './updates';
 import { SelectContact } from './selectcontact';
 import { SendMessage } from './sendmessage';
 import { LogoutPage } from './logout';

 export class FaceBook 
 {

 loginPage = new LoginPage();
 landingPage = new LandingPage();
 updates = new Updates();
 sendMessage = new SendMessage();
 selectContact = new SelectContact();
 logoutPage = new LogoutPage();
 }

 const facebook = new FaceBook();

 beforeEach(() => {
  cy.visit('https://www.facebook.com/')
})

 describe ('When I am redirected to the facebook page', () => {
  it ('I am able to send a message & log out', () => {
    expect (facebook.loginPage.enterLoginCredentials());
    expect (facebook.loginPage.submitCredentials());
    expect (facebook.landingPage.verifyLandingPage());
    expect (facebook.selectContact.selectingcontact());
    expect (facebook.sendMessage.sendingMessage());
   expect  (facebook.logoutPage.logout());
});
});


describe ('When I am redirected to the facebook page', () => {
  it ('I am able to send a message & log out', () => {
    expect (facebook.loginPage.enterLoginCredentials());
    expect (facebook.loginPage.submitCredentials());
    expect (facebook.landingPage.verifyLandingPage());
    expect (facebook.updates.checkupdates());
});
});


// if(cy.contains('Email or Phone')) 
//   {
//  expect(cy.contains('Email or Phone'),"Text is missing");
//  cy.contains('Email or Phone').click().type('abhi.cal2008@gmail.com');
//  expect(cy.contains('Password'),"Text is missing");
//  cy.contains('Password').click().type('ayushbose@2002');
//  expect(cy.contains('Log In'),"Text is missing");
//  cy.contains('Log In').click();
//  }
//   else if(cy.contains('Abhishek'))
//  {
//  expect(cy.contains('Abhishek'),"Text is missing");
//  cy.contains('Abhishek').click(); 
//  expect(cy.contains('Password'),"Text is missing");
//  cy.contains('Password').click().type('ayushbose@2002');
//  expect(cy.contains('Log In'),"Text is missing");
//  cy.contains('Log In').click();
//  }
//  else if(cy.contains('Email address or phone number')) 
//  {
//  expect(cy.contains('Email address or phone number'),"Text is missing");
//  cy.contains('Email address or phone number').click().type('abhi.cal2008@gmail.com');
//  expect(cy.contains('Password'),"Text is missing");
//  cy.contains('Password').click().type('ayushbose@2002');
//  expect(cy.contains('Log In'),"Text is missing");
//  cy.contains('Log In').click();
// }
// expect(cy.contains('See More...'),"Text is missing");
// cy.contains('See More...').click();
// // cy.get('input._1frb').should('contain','Search').check({ force: true }).click().type('George Grace');
// // cy.get('input._1frb').check({ force: true }).click().type('George Grace');
// // cy.get('input._1frb').click().type('George');
// // cy.get('input._1frb').click();
// // cy.get('input._1frb').should('contain', 'Search');
// //setTimeout(3000);
// // cy.get('input._1frb').click().type('George Grace');
// expect(cy.contains('Akshay Sud'),"Text is missing");
// cy.contains('Akshay Sud').click();
// cy.get('div._1mf._1mj').click().type('This is a test').type('{enter}');
// //cy.contains('Type a message...', visible: false) .type('This is a test for cypress automation code').type('{enter}');
// expect(cy.contains('Account Settings'),"Text is missing");
// cy.contains('Account Settings').click();
// setTimeout(2000);
// expect(cy.contains('Log Out'),"Text is missing");
// cy.contains('Log Out').click();
// });
// });
