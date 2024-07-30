import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import main from '/views/pages/dd/dd-if-expression-arr.html?raw';



export default class DdIfExpressionArrCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddIf = true;
    this.setTitle('dd-if expression array');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', main);
  }

  async __init(trx) {
    // array of objects
    this.$model.companies = [
      { _id: 1, name: 'John Doe Store', opened: false, rate: -5 },
      { _id: 2, name: 'Jane Store', opened: true, rate: 100 }
    ];
  }

}
