import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddElem from '/views/pages/dd/dd-elem.html?raw';



export default class DdElemCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddElem = true;
    this.setTitle('dd-elem');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    await this.loadView('#navbar', navbar);
    await this.loadView('#main', ddElem);
  }


  // toggle text color by using dd-elem
  runELEM() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.$elem.myElem.style.color = 'blue';
    } else {
      this.$elem.myElem.style.color = 'silver';
    }
  }


}
