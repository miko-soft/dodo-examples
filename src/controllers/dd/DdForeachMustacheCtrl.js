import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachMustache from '/views/pages/dd/dd-foreach-mustache.html?raw';



export default class DdForeachMustacheCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    // this.$debugOpts.ddMustache = true;
    this.setTitle('dd-foreach dd-mustache');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachMustache);
  }

  async __init(trx) {
    this.$model.companies = [
      { name: 'Hoki Ltd', size: 33 },
      { name: 'Zoky Ltd', size: 54 }
    ];

    this.$model.myText = 'my first text !';

    this.animals = [
      { id: 1, name: 'dog' },
      { id: 2, name: 'cat' },
      { id: 3, name: 'horse' },
      { id: 4, name: 'cow' }
    ];

    this.$model.plants = [];
  }


  foreachTestMustache() {
    this.$model.companies = [
      { name: 'Cloud Ltd', size: 3 },
      { name: 'Roto Ltd', size: 5 },
      { name: 'Zen Ltd', size: 8 },
      { name: 'Den Ltd', size: 9 },
      { name: 'Len Ltd', size: 10 },
      { name: 'Pen Ltd', size: 81 },
      { name: 'Gen Ltd', size: 82 },
      { name: 'Ren Ltd', size: 83 }
    ];
    this.$model.myText = 'my second text !';
  }


  // plants - generated options with dd-foreach & dd-mustache
  generatePlants() {
    this.$model.plants = [
      { id: 1, name: 'Corn', price: 8000 },
      { id: 2, name: 'Ananas', price: 4000 },
      { id: 3, name: 'Banana', price: 6000 },
      { id: 4, name: 'Potato', price: 1000 },
      { id: 5, name: 'Apple', price: 5000 }
    ];
  }


}
