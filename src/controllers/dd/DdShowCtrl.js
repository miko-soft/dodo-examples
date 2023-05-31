import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddShow from '/views/pages/dd/dd-show.html?raw';



export default class DdShowCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddShow = true;
    this.setTitle('dd-show');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddShow);
  }

  async __init(trx) {
    this.myBool = true;

    this.x = 'This is X';

    this.$model.n1 = 5;
    this.$model.n2 = 8;

    this.$model.my = {};
  }


  show1() {
    this.$model.my = { bool: true };
  }

  show2() {
    this.$model.n1 = 8;
    this.$model.n2 = 8;
  }

  // show/hide elements with button click
  toggleSHOW() {
    this.$model.showX = !this.$model.showX;
    // console.log('toggleSHOW::', this.$model.showX);
  }

  toggleSHOW2() {
    this.$model.showX2 = !this.$model.showX2;
    // console.log('toggleSHOW2::', this.$model.showX2);
  }

}
