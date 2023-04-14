const { I } = inject();

module.exports = {
  
  firstNameField: { xpath: '//*[@id="input-firstname"]' },
  lastNameField: { xpath: '//*[@id="input-lastname"]' },
  emailField: {xpath: '//*[@id="input-email"]'},
  telephoneField: {xpath: '//*[@id="input-telephone"]'},
  passwordField: {xpath: '//*[@id="input-password"]'},
  passwordConfirmField: {xpath: '//*[@id="input-confirm"]'},
  policyAgree: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
  continueButton: {xpath: '//*[@id="content"]/form/div/div/input[2]'},


  verifyRegisterPage() {
    I.see('Register Account');
  },

  clickPolicyAgree() {
    I.click(this.policyAgree);
  },

  submitRegisterForm() {
    I.click(this.continueButton);
  },

  verifyRegistrationSuccess() {
    I.see('Your Account Has Been Created!');
  },

  fillNewUserForm(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.emailField);
    I.fillField(this.telephoneField, user.telephoneField);
    I.fillField(this.passwordField, user.passwordField);
    I.fillField(this.passwordConfirmField, user.passwordConfirmField);
  },
};


