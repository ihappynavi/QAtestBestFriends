Feature('register');

const NEW_USER = {
    firstName: "Ivan",
    lastName: "37",
    emailField: 'ihappynavi' + Date.now() + '@test.com',
    telephoneField: '380732761986',
    passwordField: 'PAss21!!',
    passwordConfirmField: 'PAss21!!',
};

Scenario('register new user', ({ I, basePage, registerPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php');
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage();
    registerPage.fillNewUserForm(NEW_USER);
    registerPage.clickPolicyAgree();
    registerPage.submitRegisterForm();
    pause();
});

