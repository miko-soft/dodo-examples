import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachDoubledollar from '/views/pages/dd/dd-foreach-doubledollar.html?raw';



export default class DdForeachDoubledollarCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    // this.$debugOpts.ddText = true;
    this.setTitle('dd-foreach (Doubledollar)');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachDoubledollar);
  }

  async __init(trx) {
    this.$model.companies = [
      { name: 'Cloud Ltd', size: 3 },
      { name: 'Roto Ltd', size: 5 }
    ];
    this.$model.selectedCompany = { name: 'not selected', size: 0 };
  }


  changeCompanies() {
    const rnd1 = Math.round((Math.random() * 100));
    const rnd2 = Math.round((Math.random() * 100));
    const rnd3 = Math.round((Math.random() * 100));
    this.$model.companies = [
      { name: 'ABC Ltd', size: rnd1 },
      { name: 'Dugi Ltd', size: rnd2 },
      { name: 'Soko Ltd', size: rnd3 }
    ];
    this.$model.company = '';
  }


  selectCompany($$company) {
    console.log('selected company::', $$company);
    this.$model.company = $$company;
  }



}
