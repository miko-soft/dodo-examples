import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import main from '/views/pages/ddCloners/dd-each-doubledollar-subproperty.html?raw';



export default class DdEachDoubledollarSubpropertyCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddModel = true;
    this.setTitle('dd-each doubledollar subproperty');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', main);
  }

  async __init(trx) {
    this.companies = [
      { name: 'Cloud Ltd', size: 3 },
      { name: 'Roto Ltd', size: 5 },
      { name: 'Zen Ltd', size: 8 }
    ];

    this.$model.companies = [
      { name: 'Pen Ltd', size: 81 },
      { name: 'Gen Ltd', size: 82 },
      { name: 'Ren Ltd', size: 83 }
    ];

    this.$model.selectedCompany = null;
  }


  selectCompany(company) {
    console.log('this.companies::', this.companies);
    console.log('this.$model.companies::', this.$model.companies);
    this.$model.selectedCompany = company;
  }

}
