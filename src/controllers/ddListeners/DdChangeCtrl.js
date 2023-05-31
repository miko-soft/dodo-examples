import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddChange from '/views/pages/ddListeners/dd-change.html?raw';



export default class DdChangeCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddChange = true;
    this.setTitle('dd-change');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddChange);
  }


  // update dd-switch and dd-if every time the SELECT is changed
  async runCHANGE(n, val) {
    if (n === 1) {
      this.$model.change1 = val;
    } else if (n === 2) {
      this.$model.change2 = val;
    }
  }


}
