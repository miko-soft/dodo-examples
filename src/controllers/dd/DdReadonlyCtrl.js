import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddReadonly from '/views/pages/dd/dd-readonly.html?raw';



export default class DdReadonlyCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddReadonly = true;
    this.setTitle('dd-readonly');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddReadonly);
  }

  async __init(trx) {
    this.myBool = true;
    this.x = 'This is X';
    this.$model.n1 = 0;
    this.$model.ro = {};
    this.$model.a = 10;
  }


  ro1() {
    this.$model.ro = { bool: true };
  }

  isReadonly() {
    return this.x === 'This is X';
  }


  ro2() {
    this.$model.n1 = 8;
  }
  isReadonly2() {
    return this.$model.n1 > 6 && this.$model.n1 < 10;
  }


  toggleRO() {
    this.$model.roX = !this.$model.roX;
  }


  changeNumber(n) {
    this.$model.a = n;
  }

}
