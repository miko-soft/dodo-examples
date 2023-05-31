import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddCheckedCheckboxes from '/views/pages/dd/dd-checked-checkboxes.html?raw';



export default class DdCheckedCheckboxesCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddChecked = true;
    this.setTitle('dd-checked (checkboxes)');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddCheckedCheckboxes);
  }


  async __init(trx) {
    this.$model.user_names = ['Tin']; // initial value for the dd-checked
  }


  setUserNames() {
    this.$model.user_names = ['Pin', 'Tin'];
  }


  setPositions() {
    this.$model.positions = ['engineer', 'cto'];
  }


}
