Feature('register');

const NEW_USER = {
    firstName: "Oleg",
    lastName: "9",
    email: Date.now() + '@test.com',
};

Scenario('register new user', ({ I, basePage, registerPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php');
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage();
    registerPage.fillNewUserForm(NEW_USER);
    pause();
});

xScenario('grab price', async ({ I }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=20_264&product_id=29');
    const price = await I.grabTextFrom({ xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]' });
    console.log(+price.slice(1));
});