const Page = require('./page');

class DashboardPage extends Page {
  dashboardPageTitle() {
    browser.pause(500);
    return super.getPageTitle();
  }

  open(path) {
    return super.open(path);
  }
}

module.exports = new DashboardPage();
