import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import main from '/views/pages/dd/dd-if-expression.html?raw';



export default class DdIfExpressionCtrl extends Controller {

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
    this.loadView('#main', main);
  }

  async __init(trx) {
    this.a = 5;
    this.b = '88';
    this.c = 'some string';
    this.d = 100;
    this.e = false;
    this.isActive = false;
    this.$model.x = 1000;

    this.bool1 = true;
    this.bool2 = true;
    this.bool3 = false;
  }

}
