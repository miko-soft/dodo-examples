import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddlazyjs from '/views/pages/view/ddlazyjs.html?raw';



export default class ViewDdLazyjsCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.$debugOpts.ddLazyjs = true;
    this.setTitle('dd-lazyjs');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddlazyjs);
    console.log('++++++ HOOK __loader()');
  }


  async __init() {
    console.log('\n++++++ HOOK __init()');
  }

  async __postrend() {
    console.log('\n++++++ HOOK __postrend()');
  }


}
