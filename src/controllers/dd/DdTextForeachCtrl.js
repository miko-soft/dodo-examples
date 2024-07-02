import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddTextForeach from '/views/pages/dd/dd-text-foreach.html?raw';



export default class DdTextCtrl extends Controller {

  constructor(app) {
    super();
  }


  async __loader(trx) {
    this.setTitle('dd-text-foreach');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddTextForeach);
  }


  async __init(trx) {
    this.animals = ['rabbit', 'dog', 'cat', 'cow', 'aligator'];
  }


  printAnimal(val, key) {
    return `${key + 1} - ${val} is an animal`;
  }

}
