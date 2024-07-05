import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddCheckedRadios from '/views/pages/dd/dd-checked-radios.html?raw';



export default class DdCheckedRadiosCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddChecked = true;
    this.setTitle('dd-checked (radios)');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddCheckedRadios);
  }

  async __init(trx) {
    this.$model.pet = 'rabbit'; // initial value for the dd-checked
  }


  setPet() {
    this.$model.pet = 'dog';
  }


  setNumber() {
    this.$model.number = '3'; // must be a string
  }


  selectUser(usr) {
    return usr; // Marko
  }

}
