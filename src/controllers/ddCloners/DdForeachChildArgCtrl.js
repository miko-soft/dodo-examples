import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachChildArg from '/views/pages/ddCloners/dd-foreach-child-arg.html?raw';



export default class DdForeachChildArgCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('dd-foreach-child arg');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachChildArg);
  }

  async __init(trx) {
    this.companies = [
      {
        name: 'Roky Ltd',
        workers: ['Ric', 'Robert', 'Roman']
      },
      {
        name: 'Sat Ltd',
        workers: ['Sasa', 'Simun', 'Savo']
      },
      {
        name: 'Tocak Ltd',
        workers: ['Tin', 'Tako', 'Tetos']
      }
    ];
  }


}
