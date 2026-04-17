import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import main from '/views/pages/ddCloners/dd-each2.html?raw';



export default class DdEach2Ctrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('dd-each2 (nested arrays)');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', main);
  }

  async __init(trx) {
    this.users = [
      { name: 'Peter', companies: ['Microsoft', 'IBM'] },
      { name: 'John', companies: ['Google', 'Yahoo'] }
    ];
  }

}
