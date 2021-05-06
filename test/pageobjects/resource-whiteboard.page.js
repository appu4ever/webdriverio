const ElementUtils = require('../utils/elementUtils');
const Page = require('../pageobjects/page');

class ResourceWhiteboard extends Page {
  get weekButton() {
    return $(
      '//*[@id="resource-whiteboard-calendar"]/div/div[1]/div[1]/div[1]/div[3]/button[4]'
    );
  }

  get weekTextContainer() {
    return $('#dateNavigator > div');
  }

  async clickWeekButton() {
    browser.pause(5000);
    await ElementUtils.doBtnClick(await this.weekButton);
  }

  async getWeekText() {
    browser.pause(5000);
    return await ElementUtils.doGetText(this.weekTextContainer);
  }

  open(path) {
    return super.open(path);
  }
}

module.exports = new ResourceWhiteboard();
