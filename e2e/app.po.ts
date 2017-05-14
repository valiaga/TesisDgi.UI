import { browser, by, element } from 'protractor';

export class TesisDgi.UIPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dgi-root h1')).getText();
  }
}
