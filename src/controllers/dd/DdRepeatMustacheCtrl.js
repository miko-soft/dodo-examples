import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddRepeatMustache from '../../views/pages/dd/dd-repeat-mustache.html?raw';



export default class DdRepeatMustacheCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddRepeat = true;
    this.setTitle('dd-repeat with dd-mustache');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddRepeatMustache);
  }

  async __init(trx) {
    this.$model.myArr = ['One', 'Two', 'Three'];
  }


  changeModel() {
    this.$model.myArr = [1, 2, 3, 4, 5, 6];
  }


}
