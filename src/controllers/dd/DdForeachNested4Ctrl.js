import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachNested4 from '/views/pages/dd/dd-foreach-nested4.html?raw';



export default class DdForeachNested4Ctrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.$debugOpts.ddForeach = true;
    this.setTitle('dd-foreach (nested4)');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachNested4);
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
