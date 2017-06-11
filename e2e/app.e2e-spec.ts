import { TravelersdiaryNgPage } from './app.po';

describe('travelersdiary-ng App', () => {
  let page: TravelersdiaryNgPage;

  beforeEach(() => {
    page = new TravelersdiaryNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
