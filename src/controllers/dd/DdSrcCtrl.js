import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddSrc from '../../views/pages/dd/dd-src.html?raw';



export default class DdSrcCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddSrc = true;
    this.setTitle('dd-src');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddSrc);
  }


  // define image src attribute
  runSRC() {
    this.$model.imageURL = 'http://cdn.dex8.com/img/turnkey_tasks/scraper_free.png';
  }

}
