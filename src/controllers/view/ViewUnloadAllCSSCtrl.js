import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import unloadallcss from '/views/pages/view/unloadallcss.html?raw';



export default class ViewUnloadAllCSSCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('unloadAllCSS');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', unloadallcss);
    this.loadCSS('https://www.w3schools.com/w3css/4/w3.css');
    this.loadCSS('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  }

  async __destroy() {
    this.unloadCSS('https://www.w3schools.com/w3css/4/w3.css');
    this.unloadCSS('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  }

  unloadAllCSS_test() {
    this.unloadAllCSS();
  }

}
