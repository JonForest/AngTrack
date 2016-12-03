import { AngTrackPage } from './app.po';

describe('ang-track App', function() {
  let page: AngTrackPage;

  beforeEach(() => {
    page = new AngTrackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
