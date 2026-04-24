import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddMax from '/views/pages/dd/dd-max.html?raw';



export default class DdMaxCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddMax = true;
    this.setTitle('dd-max');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddMax);
  }

  async __init(trx) {
    this.myMax = '100';
    this.$model.maxVal = '50';
    this.$model.maxDate = '2025-12-31';
  }


  setMaxLow() {
    this.$model.maxVal = '10';
  }

  setMaxHigh() {
    this.$model.maxVal = '200';
  }

  getMaxDate() {
    return '2026-12-31';
  }

}
