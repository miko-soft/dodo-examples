import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddKeyup from '/views/pages/ddListeners/dd-keyup.html?raw';



export default class DdKeyupCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddKeyup = true;
    this.setTitle('dd-keyup');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddKeyup);
  }


  // run on keyup event
  runKEYUP(elem, val, evt) {
    console.log('runKEYUP $element::', elem);
    console.log('runKEYUP $value::', typeof val, val);
    console.log('runKEYUP $event::', evt);
  }


}
