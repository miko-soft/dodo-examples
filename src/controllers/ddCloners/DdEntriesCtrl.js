import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddEntries from '/views/pages/ddCloners/dd-entries.html?raw';



export default class DdEntriesCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('dd-entries');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddEntries);
  }

  async __init(trx) {
    this.user = {
      name: 'John Doe',
      age: 32,
      city: 'Berlin',
      role: 'admin',
      company: {
        name: 'Microsoft',
        address: '1 Microsoft Way, Redmond, WA'
      },
      pets: [
        { name: 'dog', age: 3 },
        { name: 'cat', age: 2 },
        { name: 'rabbit', age: 1 }
      ]
    };
  }

}
