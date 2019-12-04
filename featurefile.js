 import { LoginPage } from './login';
 import { LandingPage } from './landing';
 import { ViewProfile } from './view';
 import { SelectContact } from './selectcontact';
 import { SendMessage } from './sendmessage';
 import { LogoutPage } from './logout';
 import { SearchFriends } from './searchfriends';
 import { Notifications} from './notifications';
 import { Like} from './like';
 import { Unlike} from './unlike';
 import { MyPage} from './mypage';

 export class FaceBook 
 {

 loginPage = new LoginPage();
 landingPage = new LandingPage();
 viewProfile = new ViewProfile();
 sendMessage = new SendMessage();
 selectContact = new SelectContact();
 logoutPage = new LogoutPage();
 searchFriends = new SearchFriends();
 notifications =  new Notifications();
 like = new Like();
 unlike = new Unlike();
 mypage = new MyPage();
 }

 const facebook = new FaceBook();

 beforeEach(() => {
  cy.visit('https://www.facebook.com/')
 
})

 describe ('When I want to send a message', () => {
  it ('I am able to send a message & log out', () => {
    expect (facebook.loginPage.enterLoginCredentials());
    expect (facebook.loginPage.submitCredentials());
    expect (facebook.landingPage.verifyLandingPage());
    expect (facebook.selectContact.selectingcontact());
    expect (facebook.sendMessage.sendingMessage());
   expect  (facebook.logoutPage.logout());
});
});


// describe ('When I want to view my profile', () => {
//   it ('I am able to check profile details', () => {
//     expect (facebook.loginPage.enterLoginCredentials());
//     expect (facebook.loginPage.submitCredentials());
//     expect (facebook.landingPage.verifyLandingPage());
//     expect (facebook.viewProfile.viewprofile());
//     expect (facebook.logoutPage.logout());
// });
// });

// describe ('When I want to search a friend', () => {
//   it ('I am able to search a friend', () => {
//     expect (facebook.loginPage.enterLoginCredentials());
//     expect (facebook.loginPage.submitCredentials());
//     expect (facebook.landingPage.verifyLandingPage());
//     expect (facebook.searchFriends.searchfriends());
//     expect (facebook.logoutPage.logout());
// });
// });

// describe ('When I want to view notifications', () => {
//   it ('I am able to view a page', () => {
//     expect (facebook.loginPage.enterLoginCredentials());
//     expect (facebook.loginPage.submitCredentials());
//     expect (facebook.landingPage.verifyLandingPage());
//     expect (facebook.notifications.clicknotifications());
//     expect (facebook.logoutPage.logout());
// });
// });

// describe ('When I want to dislike a page', () => {
//   it ('I am able to dislike a page', () => {
//     expect (facebook.loginPage.enterLoginCredentials());
//     expect (facebook.loginPage.submitCredentials());
//     expect (facebook.landingPage.verifyLandingPage());
//     expect (facebook.mypage.clickmypage());
//     expect (facebook.like.clicklike());
//     expect (facebook.logoutPage.logout());
// });
// });

// describe ('When I want to dislike a page', () => {
//   it ('I am able to dislike a page', () => {
//     expect (facebook.loginPage.enterLoginCredentials());
//     expect (facebook.loginPage.submitCredentials());
//     expect (facebook.landingPage.verifyLandingPage());
//     expect (facebook.mypage.clickmypage());
//     expect (facebook.unlike.clickunlike());
//     expect (facebook.logoutPage.logout());
// });
// });