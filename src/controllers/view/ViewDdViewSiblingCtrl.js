import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddView from '../../views/pages/view/ddview.html?raw';
import part from '../../views/pages/view/test/part.html?raw';



export default class ViewDdViewSiblingCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.loadView = false; // debug
    this.setTitle('dd-view sibling');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddView);
    this.loadView('#main-part', part, 'sibling');
  }


  async __init(trx) {
    this.destination = 'sibling';
  }

}
