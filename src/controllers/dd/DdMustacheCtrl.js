import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddMustache from '/views/pages/dd/dd-mustache.html?raw';

export default class DdMustacheCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddMustache = true; // enable debugging for dd-text directive
    this.setTitle('dd-mustache');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddMustache);
  }


  async __init(trx) {
    this.product_name = 'Banana';
    this.$model.company_name = 'Tin Ltd';
    this.$model.num = 3;
    this.$model.placeHolder = 'username';
  }


  changeNum(num) {
    this.$model.num = num;
  }

  changePlaceholder() {
    this.$model.placeHolder = 'nutzername';
  }


}
