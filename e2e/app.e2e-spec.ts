import { ResumeJunkerPage } from './app.po';

describe('resume-junker App', () => {
  let page: ResumeJunkerPage;

  beforeEach(() => {
    page = new ResumeJunkerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
