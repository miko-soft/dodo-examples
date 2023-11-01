import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachIf from '/views/pages/dd/dd-foreach-if.html?raw';



export default class DdForeachIfCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    this.$debugOpts.ddIf = true;
    this.setTitle('dd-foreach dd-if');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachIf);
  }

  async __init(trx) {
    this.$model.companies = [
      { name: 'Koji Ltd', size: 3 },
      { name: 'Kojak Ltd', size: 55 }
    ];

    this.$model.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }


  changeCompanies() {
    this.$model.companies = [
      { name: 'Cloud Ltd', size: this.getRnd() },
      { name: 'Roto Ltd', size: this.getRnd() },
      { name: 'Zen Ltd', size: this.getRnd() },
      { name: 'Den Ltd', size: this.getRnd() },
      { name: 'Len Ltd', size: this.getRnd() },
      { name: 'Pen Ltd', size: this.getRnd() },
      { name: 'Gen Ltd', size: this.getRnd() },
      { name: 'Ren Ltd', size: this.getRnd() }
    ];
  }


  changeNumbers() {
    this.$model.numbers = [1, 3, 9];
  }

  getRnd() {
    return Math.round((Math.random() * 100));
  }


}
