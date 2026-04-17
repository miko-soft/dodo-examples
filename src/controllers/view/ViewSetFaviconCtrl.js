import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import setfavicon from '/views/pages/view/setfavicon.html?raw';



export default class ViewSetFaviconCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('setFavicon');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', setfavicon);
  }

  async __destroy() {
    this.setFavicon('/favicon.png');
  }

  setFaviconRed() {
    this.setFavicon('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23e74c3c"/></svg>');
  }

  setFaviconBlue() {
    this.setFavicon('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%233498db"/></svg>');
  }

  setFaviconGreen() {
    this.setFavicon('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%232ecc71"/></svg>');
  }

  setFaviconDefault() {
    this.setFavicon('/favicon.png');
  }

}
