import { WeatherServiceUiPage } from './app.po';

describe('weather-service-ui App', () => {
  let page: WeatherServiceUiPage;

  beforeEach(() => {
    page = new WeatherServiceUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
