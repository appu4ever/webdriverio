class ElementUtils {
  async doSetValue(element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
  }

  async doGetText(element) {
    await element.waitForDisplayed();
    await element.getText();
  }

  async doGetAttribute(element, attr) {
    await element.waitForDisplayed();
    await element.getAttribute(attr);
  }

  async doNavigationLinkText(element) {
    await element.waitForDisplayed();
    await element.getText();
  }

  async doBtnClick(element) {
    await element.waitForClickable({ timeout: 5000 });
    await element.click();
  }
}

module.exports = new ElementUtils();
