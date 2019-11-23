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

