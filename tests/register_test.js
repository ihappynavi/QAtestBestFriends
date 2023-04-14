Feature('register');

const NEW_USER = {
    firstName: "Ivan",
    lastName: "37",
    email: 'ihappynavi' + Date.now() + '@test.com',
    telephone: '380732761986',
    password: 'PAss21!!',
};

Scenario('register new user', ({ I, basePage, registerPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php');
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage();
    registerPage.fillNewUserForm(NEW_USER);
    registerPage.clickPolicyAgree();
    registerPage.submitRegisterForm();
});

