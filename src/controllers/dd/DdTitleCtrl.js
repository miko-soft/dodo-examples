import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddTitle from '/views/pages/dd/dd-title.html?raw';



export default class DdTitleCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddTitle = true;
    this.setTitle('dd-title');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddTitle);
  }

  async __init(trx) {
    this.myTitle = 'This is a tooltip from a controller property';
    this.$model.tip = 'Model-driven tooltip text';
  }


  changeTitle() {
    this.$model.tip = 'Updated tooltip via model change';
  }

  resetTitle() {
    this.$model.tip = 'Model-driven tooltip text';
  }

  getTitle() {
    return 'Tooltip from a controller method';
  }

}
