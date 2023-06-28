import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddIfNested from '/views/pages/dd/dd-if-nested.html?raw';



export default class DdIfNestedCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddIf = true;
    this.setTitle('dd-if (nested)');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddIfNested);
  }

  async __init(trx) {
    this.$model.varA = false;
    this.$model.varB = 5;
  }



}
