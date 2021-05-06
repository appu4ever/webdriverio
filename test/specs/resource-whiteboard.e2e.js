const ResourceWhiteboardPage = require('../pageobjects/resource-whiteboard.page');

describe('Resource whiteboard page', () => {
  it('should display current week when week view button is clicked', async () => {
    await ResourceWhiteboardPage.open('jobs/whiteboard/resource');
    await ResourceWhiteboardPage.clickWeekButton();
    expect(await ResourceWhiteboardPage.getWeekText()).toEqual(
      'May 03 - May 09, 2021'
    );
  });
});
