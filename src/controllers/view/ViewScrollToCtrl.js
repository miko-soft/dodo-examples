import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import scrollto from '/views/pages/view/scrollto.html?raw';



export default class ViewScrollToCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('scrollTo');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', scrollto);
  }

  toSection1() { this.scrollTo('#section1'); }
  toSection2() { this.scrollTo('#section2', { behavior: 'smooth', block: 'start' }); }
  toSection3() { this.scrollTo('#section3', { behavior: 'instant', block: 'center' }); }
  toTop() { this.scrollTo('#scrollto-top'); }

}
