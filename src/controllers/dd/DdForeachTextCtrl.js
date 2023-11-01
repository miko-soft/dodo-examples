import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachText from '/views/pages/dd/dd-foreach-text.html?raw';



export default class DdForeachTextCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    this.$debugOpts.ddText = true;
    // this.$debugOpts.ddIf = true;
    this.setTitle('dd-foreach dd-text');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachText);
  }

  async __init(trx) {
    this.$model.ids = [1, 2, 3];
    this.names = ['Marko', 'Saša', 'Robert', 'Peter', 'Toni'];
  }


  changeIds() {
    this.$model.ids = [1, 3, 5];
    console.log(this.names);
  }


}
