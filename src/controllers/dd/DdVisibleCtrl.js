import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddVisible from '/views/pages/dd/dd-visible.html?raw';



export default class DdVisibleCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddVisible = true;
    this.setTitle('dd-visible');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddVisible);
  }

  async __init(trx) {
    this.myBool = true;
    this.$model.my = {};
    this.x = 'This is X';
    this.$model.n1 = 5;
    this.$model.n2 = 8;
  }


  show1() {
    this.$model.my = { bool: true };
  }

  isVisible() {
    return this.x === 'This is X';
  }




  // show/hide elements with button click
  toggleVisible() {
    this.$model.visX = !this.$model.visX;
    // console.log('toggleSHOW::', this.$model.visX);
  }

}
