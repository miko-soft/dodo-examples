import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddIf from '../../views/pages/dd/dd-if.html?raw';



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
    this.x = 2;
  }


  if1() {
    this.$model.my = { bool: true };
  }

  if2A() {
    this.$model.n1 = 8;
    this.$model.n2 = 11;
  }
  if2B() {
    this.$model.n1 = 5;
    this.$model.n2 = 11;
  }
  if2C() {
    this.$model.n1 = 8;
    this.$model.n2 = 9;
  }

  toggleIF() {
    this.$model.showX = !this.$model.showX;
    // console.log('toggleSHOW::', this.$model.showX);
  }

}
