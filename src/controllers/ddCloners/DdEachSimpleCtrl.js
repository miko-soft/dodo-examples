import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddEachSimple from '/views/pages/ddCloners/dd-each-simple.html?raw';



export default class DdEachDdSimpleCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddEach = true;
    this.setTitle('dd-each simple');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddEachSimple);
  }

  async __init(trx) {
    this.pets = ['dog', 'cat'];
  }

}
