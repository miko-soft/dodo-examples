import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import main from '/views/pages/ddCloners/dd-each2complex.html?raw';



export default class DdEach2ComplexCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('dd-each2 complex');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', main);
  }

  async __init(trx) {
    this.users = [
      {
        first_name: 'Peter', companies: [
          { name: 'Microsoft', address: '1 Microsoft Way, Redmond, WA' },
          { name: 'IBM', address: '1 New Orchard Rd, Armonk, NY' }

        ]
      },
      {
        first_name: 'John', companies: [
          { name: 'Google', address: '123 Main St, Anytown, USA' },
          { name: 'Yahoo', address: '123 Main St, Anytown, USA' }
        ]
      }
    ];
  }

}
