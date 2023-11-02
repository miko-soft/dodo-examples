import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddMustache from '/views/pages/ddCloners/dd-mustache.html?raw';

export default class DdMustacheCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddMustache = true;
    // this.$debugOpts.model = true;
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

    this.$model.classNum = 5;
    this.$model.myPlaceholder = 'username';
  }


  changeNum(num) {
    this.$model.num = num;
  }

  changeAttrs() {
    this.$model.classNum = 6;
    this.$model.myPlaceholder = 'korisnik';
  }



}
