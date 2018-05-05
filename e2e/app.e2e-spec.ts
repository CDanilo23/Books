import { MyRoutesPage } from './app.po';

describe('my-routes App', function() {
  let page: MyRoutesPage;

  beforeEach(() => {
    page = new MyRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
