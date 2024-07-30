import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddTextMeth from '/views/pages/dd/dd-text-concat.html?raw';



export default class DdTextConcatCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('dd-text concat');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddTextMeth);
  }


  async __init(trx) {
    this.pet = 'dog';
    this.n = 22;
    this.$model.first_name = 'Ivan';
    this.product = { size: 25 };
    this.$model.companies = [{ name: 'Cloud Ltd', size: 88 }];
  }


}
