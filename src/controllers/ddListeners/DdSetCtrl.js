import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddSet from '/views/pages/ddListeners/dd-set.html?raw';



export default class DdSetCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddSet = true;
    this.setTitle('dd-set');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddSet);
  }


  printInConsole() {
    console.log('mySet1::', this.mySet1);
  }

  setSeeConsole() {
    console.log('mySet_orig::', typeof this.$model.mySet_orig, this.$model.mySet_orig);
    console.log('mySet_converted::', typeof this.$model.mySet_converted, this.$model.mySet_converted);
  }


}
