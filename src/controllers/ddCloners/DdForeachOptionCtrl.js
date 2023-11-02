import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachOption from '/views/pages/ddCloners/dd-foreach-option.html?raw';



export default class DdForeachOptionCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    this.setTitle('dd-foreach select option');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachOption);
  }

  async __init(trx) {
    this.$model.autos = [];
  }


  async generateAutos() {
    this.$model.autos = [
      { id: 1, name: 'Toyota', price: 8000 },
      { id: 2, name: 'WV', price: 4000 },
      { id: 3, name: 'BMW', price: 6000 },
      { id: 4, name: 'Fiat', price: 1000 },
      { id: 5, name: 'Audi', price: 5000 }
    ];
  }


}
