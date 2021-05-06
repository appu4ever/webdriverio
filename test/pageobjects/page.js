const ElementUtils = require('../utils/elementUtils');

module.exports = class Page {
  get pageTitle() {
    return $('//*[@id="toolbar"]/div/div[3]/a8-header/div/div/div[1]');
  }

  async getPageTitle() {
    return await ElementUtils.doGetText(await this.pageTitle);
  }

  open(path = '') {
    return browser.url(`/${path}`);
  }
};
