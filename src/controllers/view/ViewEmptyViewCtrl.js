import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import emptyview from '../../views/pages/view/emptyview.html?raw';
import part from '../../views/pages/view/test/part.html?raw';



export default class ViewEmptyViewCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('emptyView');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', emptyview);
    this.loadView('#part', part, 'sibling');
  }

  async __init(trx) {
    this.shownView = true;
  }


  toggle_view() {
    this.shownView = !this.shownView;
    this.shownView ? this.loadView('#part', part, 'sibling') : this.emptyView('#part', 'sibling');
  }

}
