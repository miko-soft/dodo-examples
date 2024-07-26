import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddTextMeth from '/views/pages/dd/dd-text-math.html?raw';



export default class DdTextMathCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('dd-text math');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddTextMeth);
  }


  async __init(trx) {
    this.a = 10;
    this.$model.b = 20;
    this.product = { size: 25 };
  }


}
