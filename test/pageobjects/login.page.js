const Page = require('./page');
const ElementUtils = require('../utils/elementUtils');

class LoginPage extends Page {
  get inputUsername() {
    return $('#input_0');
  }
  get inputPassword() {
    return $('#input_1');
  }

  get btnSubmit() {
    return $('//*[@id="login-v2-form"]/form/button');
  }

  get loginForm() {
    return $('#login-v2-form');
  }

  get errorMessage() {
    return $(
      '#login-v2-form > form > div.alert-error.ng-binding.layout-align-center-center.layout-row'
    );
  }

  async login(username, password) {
    browser.waitUntil(
      async () => {
        return await (await this.loginForm).waitForExist();
      },
      {
        timeout: 5000,
        timeoutMsg: 'Failed to access login form after 5s',
      }
    );
    await ElementUtils.doSetValue(await this.inputUsername, username);
    await ElementUtils.doSetValue(await this.inputPassword, password);
    browser.waitUntil(
      async () => {
        const isDisabled = await (await this.btnSubmit).getAttribute(
          'disabled'
        );
        return !isDisabled;
      },
      {
        timeout: 5000,
        timeoutMsg: 'Button is in disabled state after 5s',
      }
    );
    browser.pause(500);
    await ElementUtils.doBtnClick(await this.btnSubmit);
    browser.pause(500);
  }

  async getErrorText() {
    return await ElementUtils.doGetText(await this.errorMessage);
  }

  open() {
    return super.open('');
  }
}

module.exports = new LoginPage();
