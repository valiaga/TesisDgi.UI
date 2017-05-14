import { TesisDgi.UIPage } from './app.po';

describe('tesis-dgi.ui App', () => {
  let page: TesisDgi.UIPage;

  beforeEach(() => {
    page = new TesisDgi.UIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dgi works!');
  });
});
