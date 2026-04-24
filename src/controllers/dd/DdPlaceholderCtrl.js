import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddPlaceholder from '/views/pages/dd/dd-placeholder.html?raw';



export default class DdPlaceholderCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddPlaceholder = true;
    this.setTitle('dd-placeholder');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddPlaceholder);
  }

  async __init(trx) {
    this.myPlaceholder = 'Enter your name';
    this.$model.ph = 'Search here...';
  }


  changePlaceholder() {
    this.$model.ph = 'Type to filter...';
  }

  resetPlaceholder() {
    this.$model.ph = 'Search here...';
  }

  getPlaceholder() {
    return 'Enter email address';
  }

}
