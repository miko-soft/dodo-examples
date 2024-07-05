import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddTextEach from '/views/pages/dd/dd-text-each.html?raw';



export default class DdTextEachCtrl extends Controller {

  constructor(app) {
    super();
  }


  async __loader(trx) {
    this.setTitle('dd-text-each');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddTextEach);
  }


  async __init(trx) {
    this.animals = ['rabbit', 'dog', 'cat', 'cow', 'aligator'];
  }


  printAnimal(key) {
    return `${key + 1} - ${this.animals[key]} is an animal`;
  }


  printAnimal2(val, key) {
    return `${key + 1} - ${val} is an animal`;
  }

}
