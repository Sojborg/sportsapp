export class SportsAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sports-app-app h1')).getText();
  }
}
