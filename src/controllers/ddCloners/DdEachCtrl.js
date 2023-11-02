import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddEach from '/views/pages/ddCloners/dd-each.html?raw';



export default class DdEachCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddEach = true;
    // this.$debugOpts.ddMustache = true;
    this.setTitle('dd-Each');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddEach);
  }

  async __init(trx) {
    this.names = ['John', 'Peter', 'Linda'];
    this.$model.companies = [];
  }


  setCompanies() {
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
  }


}
