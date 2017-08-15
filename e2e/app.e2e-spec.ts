import { Tg1Page } from './app.po';

describe('tg1 App', () => {
  let page: Tg1Page;

  beforeEach(() => {
    page = new Tg1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
