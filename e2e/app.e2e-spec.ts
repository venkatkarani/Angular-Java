import { PobytDemoPage } from './app.po';

describe('pobyt-demo App', function() {
  let page: PobytDemoPage;

  beforeEach(() => {
    page = new PobytDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
