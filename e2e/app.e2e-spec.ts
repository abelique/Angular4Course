import { Angular2Pract1Page } from './app.po';

describe('angular2-pract1 App', () => {
  let page: Angular2Pract1Page;

  beforeEach(() => {
    page = new Angular2Pract1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
