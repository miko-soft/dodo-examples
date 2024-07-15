import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddHref from '/views/pages/ddListeners/dd-href.html?raw';



export default class DdHrefCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddHref = true;
    this.setTitle('dd-href');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddHref);
  }

  __init() {
    this.pageURL = '/dd/dd-text';
  }


  setUrl() {
    return '/dd/dd-elem';
  }


  // show the history
  historyData() {
    console.log('window.history::', window.history);
  }

}
