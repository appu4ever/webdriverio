const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

describe('Login page', () => {
  it('should not login with invalid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('aparna.ashwin2021@gmail.com', 'fffffff');
    expect(LoginPage.getErrorText).toHaveText(
      'Your username or password is incorrect.'
    );
    expect(DashboardPage.dashboardPageTitle).toHaveText('Dashboard');
  });

  it('should login with valid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('aparna.ashwin2021@gmail.com', 'ABC123$ed');
    expect(browser).toHaveUrlContaining('dashboard');
    expect(DashboardPage.dashboardPageTitle).toHaveText('Dashboard');
  });
});
