import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddSelected from '/views/pages/dd/dd-selected.html?raw';



export default class DdSelectedCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddSelected = true;
    this.setTitle('dd-selected');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddSelected);
  }

  async __init(trx) {
    this.$model.user_names = ['Tin']; // initial value for the dd-selected
  }


  setUserNames() {
    this.$model.user_names = ['Rin', 'Pin'];
  }

  setPositions() {
    this.$model.positions = 'cto';
  }

}
