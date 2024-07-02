import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddTextMeth from '/views/pages/dd/dd-text-meth.html?raw';



export default class DdTextCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('dd-text-meth');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddTextMeth);
  }


  async __init(trx) {
    this.$model.user = { name: 'John Doe', age: 25 };
  }

  fileName(file) {
    return file + '.jpg';
  }

  calculate(a) {
    return a + 5;
  }


  getUser() {
    return this.$model.user;
  }


  getUserName() {
    return this.$model.user.name;
  }


}
