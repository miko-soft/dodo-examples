import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import setmetatag from '/views/pages/view/setmetatag.html?raw';



export default class ViewSetMetaTagCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('setMetaTag / removeMetaTag');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', setmetatag);
    this.setMetaTag('robots', 'index, follow');
    this.setMetaTag('og:title', 'DoDo Framework Examples');
    this.setMetaTag('og:image', '/public/img/logo.png');
  }

  async __destroy() {
    this.removeMetaTag('robots');
    this.removeMetaTag('og:title');
    this.removeMetaTag('og:image');
    this.removeMetaTag('og:description');
  }

  setRobotsNoindex() {
    this.setMetaTag('robots', 'noindex, nofollow');
  }

  removeRobots() {
    this.removeMetaTag('robots');
  }

  addOGDescription() {
    this.setMetaTag('og:description', 'A lightweight MVC SPA framework.');
  }

}
