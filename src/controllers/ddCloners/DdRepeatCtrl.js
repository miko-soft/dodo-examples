import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddRepeat from '/views/pages/ddCloners/dd-repeat.html?raw';



export default class DdRepeatCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddRepeat = true;
    this.setTitle('dd-repeat');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddRepeat);
  }

  async __init(trx) {
    this.$model.myNumberA = 2;
    this.$model.myNumberB = 2;
  }


  changeModel1() {
    this.$model.myNumberA = 4;
  }

  changeModel2() {
    this.$model.myNumberB = 3;
  }


}
