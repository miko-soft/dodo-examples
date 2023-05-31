import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import loadcss from '/views/pages/view/loadcss.html?raw';



export default class ViewLoadCSSCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('loadCSS');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', loadcss);
    this.loadCSS(['https://www.w3schools.com/w3css/4/w3.css']);
  }

  async __destroy() {
    this.unloadCSS(['https://www.w3schools.com/w3css/4/w3.css']);
  }

}
