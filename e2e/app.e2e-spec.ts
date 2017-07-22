import { TestMdlSelectPage } from './app.po';

describe('test-mdl-select App', () => {
  let page: TestMdlSelectPage;

  beforeEach(() => {
    page = new TestMdlSelectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
