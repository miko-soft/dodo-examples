import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachSimple from '/views/pages/dd/dd-foreach-simple.html?raw';



export default class DdForeachDdTextCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.$debugOpts.ddForeach = true;
    this.setTitle('dd-foreach simple');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachSimple);
  }

  async __init(trx) {
    this.pets = ['dog', 'cat'];
  }

}
