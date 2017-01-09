import { Myapp123Page } from './app.po';

describe('myapp123 App', function() {
  let page: Myapp123Page;

  beforeEach(() => {
    page = new Myapp123Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
