import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddDisabled from '/views/pages/dd/dd-disabled.html?raw';



export default class DdDisabledCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddDisabled = true;
    this.setTitle('dd-disabled');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddDisabled);
  }

  async __init(trx) {
    this.myBool = true;
    this.x = 'This is X';
    this.$model.n1 = 0;
    this.$model.my = {};
    this.$model.a = 10;
  }


  dis1() {
    this.$model.my = { bool: true };
  }

  isDisabled() {
    return this.x === 'This is X';
  }


  dis2() {
    this.$model.n1 = 8;
  }
  isDisabled2() {
    return this.$model.n1 > 6 && this.$model.n1 < 10;
  }


  toggleDIS() {
    this.$model.disX = !this.$model.disX;
  }


  changeNumber(n) {
    this.$model.a = n;
  }


  myAlert() {
    console.log('My Alert');
    alert('My Alert');
  }

}
