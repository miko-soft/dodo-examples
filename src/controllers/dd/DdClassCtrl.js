import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddClass from '/views/pages/dd/dd-class.html?raw';



export default class DdClassCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddClass = true;
    this.setTitle('dd-class');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddClass);
  }


  // add CSS classes 'my-red' and 'my-font-size' to the element dd-class="myKlases"
  runCLASS() {
    this.$model.myKlases = ['my-red', 'my-font-size'];
  }

}
