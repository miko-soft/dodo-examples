import { Controller, corelib } from '@mikosoft/dodo';
import home from '../views/pages/home/home.html?raw';



export default class HomeCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('DoDo Examples');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#main', home);
  }


  async __init(trx) {
  }

  async __postrend(trx) {
  }

}
