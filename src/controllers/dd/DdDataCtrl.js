import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddData from '/views/pages/dd/dd-data.html?raw';



export default class DdDataCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddData = true;
    this.setTitle('dd-data');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddData);
  }

  async __init(trx) {
    this.myId = 'user-42';
    this.$model.category = 'electronics';
    this.$model.itemId = 101;
  }


  changeCategory() {
    this.$model.category = 'books';
  }

  changeId() {
    this.$model.itemId = 999;
  }

  getRole() {
    return 'admin';
  }

}
