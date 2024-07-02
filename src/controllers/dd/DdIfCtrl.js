import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddIf from '/views/pages/dd/dd-if.html?raw';



export default class DdIfCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddIf = true;
    this.setTitle('dd-if');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddIf);
  }

  async __init(trx) {
    this.myBool = true;
    this.$model.my = {};
    this.x = 5;
    this.$model.n1;
    this.$model.n2;
    this.$model.showX = false;
  }


  toggle() {
    this.$model.my = this.$model.my.bool ? { bool: false } : { bool: true };
  }


  x_equal(n) {
    return this.x === n;
  }


  check_numbers(option) {
    if (option === 'A' && this.$model.n1 > 6 && this.$model.n2 > 10) { return true; }
    if (option === 'B' && this.$model.n1 < 6) { return true; }
    if (option === 'C' && this.$model.n2 < 10) { return true; }
  }

  if2A() {
    this.$model.n1 = 8;
    this.$model.n2 = 11;
  }
  if2B() {
    this.$model.n1 = 5;
    this.$model.n2 = undefined;
  }
  if2C() {
    this.$model.n1 = undefined;
    this.$model.n2 = 9;
  }
  if2D() {
    this.$model.n1 = undefined;
    this.$model.n2 = undefined;
  }


  toggleIF() {
    this.$model.showX = !this.$model.showX;
    // console.log('toggleSHOW::', this.$model.showX);
  }

}
