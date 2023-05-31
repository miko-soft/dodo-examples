import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddRepeat from '/views/pages/dd/dd-repeat.html?raw';



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
    this.$model.myNumber1 = 2;
    this.$model.myNumber2 = 2;
  }


  changeModel1() {
    this.$model.myNumber1 = 4;
  }

  changeModel2() {
    this.$model.myNumber2 = 3;
  }


}
