import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachGrandchild from '/views/pages/ddCloners/dd-foreach-grandchild.html?raw';



export default class DdForeachGrandchildCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    this.setTitle('dd-foreach-grandchild');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachGrandchild);
  }

  async __init(trx) {
    this.$model.rows = [
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']]
    ];
  }

  changeRows() {

    this.$model.rows = [
      [[this.rnd(), 2, 3, 22], [44, 55, 66], [77, 88, 99]],
      [['A', 'B', 'C'], ['DD', 'E', 'F'], ['G', 'H', 'I']],
      [[`A${this.rnd()}`, 'B1', 'C1'], ['D1', 'E1', 'F1'], ['G', 'H1', 'I']]
    ];
  }


  rnd() {
    return Math.round((Math.random() * 100));
  }

}
