import { Angular5TranslatePage } from './app.po';

describe('angular5-translate App', function() {
  let page: Angular5TranslatePage;

  beforeEach(() => {
    page = new Angular5TranslatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
