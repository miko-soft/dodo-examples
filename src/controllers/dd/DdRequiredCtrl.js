import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddRequired from '/views/pages/dd/dd-required.html?raw';



export default class DdRequiredCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddRequired = true;
    this.setTitle('dd-required');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddRequired);
  }

  async __init(trx) {
    this.myBool = true;
    this.x = 'This is X';
    this.$model.n1 = 0;
    this.$model.req = {};
    this.$model.a = 10;
  }


  req1() {
    this.$model.req = { bool: true };
  }

  isRequired() {
    return this.x === 'This is X';
  }


  req2() {
    this.$model.n1 = 8;
  }
  isRequired2() {
    return this.$model.n1 > 6 && this.$model.n1 < 10;
  }


  toggleREQ() {
    this.$model.reqX = !this.$model.reqX;
  }


  changeNumber(n) {
    this.$model.a = n;
  }

}
