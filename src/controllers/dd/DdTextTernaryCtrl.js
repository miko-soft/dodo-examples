import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import main from '/views/pages/dd/dd-text-ternary.html?raw';



export default class DdTextTernaryCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('dd-text ternary');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', main);
  }


  async __init(trx) {
    this.isActive = false;
    this.a = 10;
    this.$model.b = 20;
    this.product = { size: 25 };
  }


}
