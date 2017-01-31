import { ViajalaTestPage } from './app.po';

describe('viajala-test App', function() {
  let page: ViajalaTestPage;

  beforeEach(() => {
    page = new ViajalaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
