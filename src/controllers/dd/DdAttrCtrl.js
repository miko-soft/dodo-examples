import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddAttr from '../../views/pages/dd/dd-attr.html?raw';



export default class DdAttrCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddAttr = true;
    this.setTitle('dd-attr');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddAttr);
  }


  runATTR1() {
    this.$model.someURL = 'https://www.adsuu.com';
  }

  runATTR2() {
    this.$model.someURL = 'https://www.yahoo.com';
  }

}
