import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddEachOptionSimple from '/views/pages/ddCloners/dd-each-option-simple.html?raw';



export default class DdEachOptionSimpleCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddEach = true;
    this.setTitle('dd-each-option-simple');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddEachOptionSimple);
  }

  async __init(trx) {
    this.countries = ['USA', 'UK', 'Croatia', 'Germany'];
  }


}
