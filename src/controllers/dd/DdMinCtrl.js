import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddMin from '/views/pages/dd/dd-min.html?raw';



export default class DdMinCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddMin = true;
    this.setTitle('dd-min');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddMin);
  }

  async __init(trx) {
    this.myMin = '5';
    this.$model.minVal = '0';
    this.$model.minDate = '2024-01-01';
  }


  setMinNegative() {
    this.$model.minVal = '-10';
  }

  setMinPositive() {
    this.$model.minVal = '1';
  }

  getMinDate() {
    return '2025-01-01';
  }

}
